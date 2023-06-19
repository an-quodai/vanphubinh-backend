import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Partner from 'App/Models/Partner'

export default class PartnersController {
  public async index({ request }: HttpContextContract) {
    const { page, perPage, ...input } = request.qs()
    const partners = await Partner.query()
      .apply((scopes) => scopes.filtration(input))
      .paginate(page, perPage)

    return partners
  }
}
