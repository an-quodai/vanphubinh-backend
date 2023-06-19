import { DateTime } from 'luxon'
import { BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Partner from './Partner'
import AppBaseModel from './AppBaseModel'
import SaleOrderLine from './SaleOrderLine'

export default class SaleOrder extends AppBaseModel {
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

  @hasMany(() => SaleOrderLine)
  public saleOrderlines: HasMany<typeof SaleOrderLine>

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
