import { DateTime } from 'luxon'
import { BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Partner from './Partner'
import AppBaseModel from './AppBaseModel'
import SaleOrderLine from './SaleOrderLine'
import ProductionOrder from './ProductionOrder'
import SaleOrderFilter from './Filters/SaleOrderFilter'

export default class SaleOrder extends AppBaseModel {
  public static $filter = () => SaleOrderFilter

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'customerId' })
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
  public saleOrderLines: HasMany<typeof SaleOrderLine>

  @hasMany(() => ProductionOrder)
  public productionOrders: HasMany<typeof ProductionOrder>

  @column.dateTime({
    autoCreate: true,
    serialize: (value: DateTime) => value.setLocale('vi').toFormat('dd/MM/yyyy'),
    serializeAs: 'createdAt',
  })
  public createdAt: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    serialize: (value: DateTime) => value.setLocale('vi').toFormat('dd/MM/yyyy'),
    serializeAs: 'updatedAt',
  })
  public updatedAt: DateTime
}
