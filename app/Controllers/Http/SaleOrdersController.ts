import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import SaleOrder from 'App/Models/SaleOrder'
import CreateSaleOrderValidator from 'App/Validators/CreateSaleOrderValidator'

export default class SaleOrdersController {
  public async index({ request }: HttpContextContract) {
    const { page, perPage, ...input } = request.qs()
    const saleOrders = await SaleOrder.query()
      .apply((scopes) => scopes.filtration(input))
      .withCount('productionOrders', (query) => {
        query.as('productionOrderCount')
      })
      .withCount('saleOrderLines', (query) => {
        query.as('productableSaleLineCount').whereHas('item', (query) => {
          query.where('type', 'product')
        })
      })
      .preload('customer')
      .paginate(page, perPage)

    return saleOrders
  }

  public async store({ request, response }: HttpContextContract) {
    await Database.transaction(
      async (trx) =>
        await trx.transaction(async () => {
          const payload = await request.validate(CreateSaleOrderValidator)

          const saleOrder = await SaleOrder.create(
            {
              customerId: payload.customerId,
              discount: payload.discount,
            },
            { client: trx }
          )
          await saleOrder
            .related('saleOrderLines')
            .createMany(payload.saleOrderLines, { client: trx })
          return saleOrder
        })
    )
      .then((saleOrder) => {
        return response.created(saleOrder)
      })
      .catch((error) => {
        return response.badRequest({ message: error.message })
      })
  }
}
