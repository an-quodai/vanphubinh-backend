import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Uom from './Uom'
import ItemType from './ItemType'
import Category from './Category'

export default class Item extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uomId: number

  @belongsTo(() => Uom)
  public uom: BelongsTo<typeof Uom>

  @column()
  public purchaseUomId: number

  @belongsTo(() => Uom)
  public purchaseUom: BelongsTo<typeof Uom>

  @column()
  public price: number

  @column()
  public cost: number

  @column()
  public properties: object

  @column()
  public categoryId: number

  @belongsTo(() => Category)
  public category: BelongsTo<typeof Category>

  @column()
  public type: ItemType
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
