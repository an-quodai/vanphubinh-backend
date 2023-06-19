import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Partner from './Partner'

export default class SaleOrder extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public customerId: number

  @belongsTo(() => Partner, {
    foreignKey: 'customerId',
  })
  public customer: BelongsTo<typeof Partner>

  @column()
  public discount: number = 0

  @column()
  public status: string

  @column.dateTime({
    autoCreate: true,
    serialize: (value: DateTime) => value.setLocale('vi').toFormat('dd/MM/yyyy'),
  })
  public createdAt: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    serialize: (value: DateTime) => value.setLocale('vi').toFormat('dd/MM/yyyy'),
  })
  public updatedAt: DateTime
}
