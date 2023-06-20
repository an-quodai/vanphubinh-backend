import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { faker } from '@faker-js/faker'
import Partner from 'App/Models/Partner'

export default class extends BaseSeeder {
  public async run() {
    const partners: object[] = []
    for (let i = 0; i < 20; i++) {
      partners.push({
        name: faker.company.name(),
        phone: faker.phone.number(),
        email: faker.internet.email(),
        isCustomer: true,
        isSupplier: false,
      })
      partners.push({
        name: faker.company.name(),
        phone: faker.phone.number(),
        email: faker.internet.email(),
        isCustomer: false,
        isSupplier: true,
      })
    }
    // Write your database queries inside the run method
    await Partner.createMany(partners)
  }
}
