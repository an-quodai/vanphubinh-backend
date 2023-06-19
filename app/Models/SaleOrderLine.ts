import { DateTime } from 'luxon'
import {
  BelongsTo,
  HasMany,
  belongsTo,
  column,
  computed,
  hasMany,
  hasOne,
} from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'
import Item from './Item'
import SaleOrder from './SaleOrder'
import ProductionOrder from './ProductionOrder'

export default class SaleOrderLine extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'saleOrderId' })
  public saleOrderId: number

  @column({ serializeAs: 'itemId' })
  public itemId: number

  @belongsTo(() => Item)
  public item: BelongsTo<typeof Item>

  @column()
  public quantity: number = 0

  @column({ serializeAs: 'unitPrice' })
  public unitPrice: number = 0

  @computed()
  public get subtotal(): number {
    return this.unitPrice * this.quantity
  }

  @belongsTo(() => SaleOrder)
  public saleOrder: BelongsTo<typeof SaleOrder>

  @hasMany(() => ProductionOrder, {
    foreignKey: 'saleOrderLineId',
  })
  public productionOrders: HasMany<typeof ProductionOrder>

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
