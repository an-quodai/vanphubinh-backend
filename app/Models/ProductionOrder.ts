import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import SaleOrder from './SaleOrder'
import Item from './Item'
import SaleOrderLine from './SaleOrderLine'

export default class ProductionOrder extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public saleOrderId: number

  @column()
  public itemId: number

  @column()
  public saleOrderLineId: number

  @column()
  public quantity: number = 0

  @column()
  public deadline: Date

  @column()
  public finishedQuantity: number = 0

  @column()
  public status: string

  @belongsTo(() => SaleOrder)
  public saleOrder: BelongsTo<typeof SaleOrder>

  @belongsTo(() => Item)
  public item: BelongsTo<typeof Item>

  @belongsTo(() => SaleOrderLine)
  public saleOrderLine: BelongsTo<typeof SaleOrderLine>

  @column.dateTime({
    autoCreate: true,
    serialize: (value: DateTime) => value.setLocale('vi').toFormat('dd/MM/yyyy'),
  })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
