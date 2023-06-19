import { DateTime } from 'luxon'
import { HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'
import Partner from './Partner'

export default class Country extends AppBaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public code: string

  @column()
  public name: string

  @hasMany(() => Partner)
  public partners: HasMany<typeof Partner>

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
