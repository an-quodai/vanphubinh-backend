import { DateTime } from 'luxon'
import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Country from './Country'
import AppBaseModel from './AppBaseModel'

export default class Partner extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public address: string

  @column()
  public phone: string

  @column()
  public email: string

  @column()
  public countryCode: string

  @belongsTo(() => Country, { foreignKey: 'code' })
  public country: BelongsTo<typeof Country>

  @column({ serializeAs: null })
  public isSupplier: boolean

  @column({ serializeAs: null })
  public isCustomer: boolean

  @column()
  public companyId: number

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
