import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Item from 'App/Models/Item'

export default class ItemFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof Item, Item>

  // public method (value: any): void {
  //   this.$query.where('name', value)
  // }
}
