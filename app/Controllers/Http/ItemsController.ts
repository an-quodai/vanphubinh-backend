import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Item from 'App/Models/Item'

export default class ItemsController {
  public async index({ request }: HttpContextContract) {
    const { page, perPage, ...input } = request.qs()
    const items = await Item.query()
      .apply((scopes) => scopes.filtration(input))
      .preload('uom')
      .preload('purchaseUom')
      .preload('category')
      .paginate(page, perPage)

    return items
  }
}
