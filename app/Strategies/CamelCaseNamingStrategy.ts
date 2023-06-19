import { SnakeCaseNamingStrategy } from '@ioc:Adonis/Lucid/Orm'

export class CamelCaseNamingStrategy extends SnakeCaseNamingStrategy {
  public paginationMetaKeys() {
    return {
      total: 'total',
      perPage: 'perPage',
      currentPage: 'currentPage',
      lastPage: 'lastPage',
      firstPage: 'firstPage',
      firstPageUrl: 'firstPageUrl',
      lastPageUrl: 'lastPageUrl',
      nextPageUrl: 'nextPageUrl',
      previousPageUrl: 'previousPageUrl',
    }
  }
}
