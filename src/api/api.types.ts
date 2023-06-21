export namespace ApiModel {
  export type QueryParams = {
    limit?: number;
    offset?: number;
  };

  type Obj = {
    [key: string]: any;
  };

  export interface ApiEntity extends Obj {
    id: string;
  }

  export type ApiList<T> = {
    total: number;
    data: T[];
  };

  export interface ApiClientImplementation {
    get: <T extends ApiEntity, Params extends QueryParams = {}>(
      path: string,
      params?: Params,
    ) => Promise<T | undefined>;
    list: <T extends ApiEntity, Params extends QueryParams = {}>(
      path: string,
      params?: Params,
    ) => Promise<ApiList<T> | undefined>;
    patch: <T extends ApiEntity, Params extends QueryParams = {}>(
      path: string,
      patchData: Partial<T>,
      params?: Params,
    ) => Promise<T | undefined>;
    // NOTE: Add `put`, `post` and `delete` methods is required
  }

  export type Mocks = {
    [endpoint: string]: ApiEntity[];
  };
}
