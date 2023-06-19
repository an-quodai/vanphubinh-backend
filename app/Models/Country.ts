import { DateTime } from 'luxon'
import { column } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'

export default class Country extends AppBaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public code: string

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
