import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Item from 'App/Models/Item'

export default class ItemsController {
  public async index({ request }: HttpContextContract) {
    const { page, perPage, ...input } = request.qs()
    const items = await Item.query()
      .apply((scopes) => scopes.filtration(input))
      .select('id', 'name', 'price', 'cost', 'type')
      .preload('uom', (query) => query.select('id', 'name'))
      .preload('purchaseUom', (query) => query.select('id', 'name'))
      .preload('category', (query) => query.select('id', 'name'))
      .paginate(page, perPage)

    return items
  }
}
