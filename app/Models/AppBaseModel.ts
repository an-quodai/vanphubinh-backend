import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { BaseModel } from '@ioc:Adonis/Lucid/Orm'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { CamelCaseNamingStrategy } from 'App/Strategies/CamelCaseNamingStrategy'

export default class AppBaseModel extends compose(BaseModel, Filterable) {
  public static namingStrategy = new CamelCaseNamingStrategy()
}
