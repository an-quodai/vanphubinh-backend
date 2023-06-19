import { DateTime } from 'luxon'
import { BelongsTo, belongsTo, column, computed } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'
import Item from './Item'
import SaleOrder from './SaleOrder'

export default class SaleOrderLine extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public saleOrderId: number

  @column()
  public itemId: number

  @belongsTo(() => Item)
  public item: BelongsTo<typeof Item>

  @column()
  public quantity: number = 0

  @column()
  public unitPrice: number = 0

  @computed()
  public get subtotal(): number {
    return this.unitPrice * this.quantity
  }

  @belongsTo(() => SaleOrder)
  public saleOrder: BelongsTo<typeof SaleOrder>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
