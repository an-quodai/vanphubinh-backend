import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { BaseModel } from '@ioc:Adonis/Lucid/Orm'
import { CamelCaseNamingStrategy } from 'App/Strategies/CamelCaseNamingStrategy'
import { compose } from '@ioc:Adonis/Core/Helpers'

export default class AppBaseModel extends compose(BaseModel, Filterable) {
  public static namingStrategy = new CamelCaseNamingStrategy()
}
