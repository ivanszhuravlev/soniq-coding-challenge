import AsyncStorage from '@react-native-async-storage/async-storage';
import {ApiModel} from 'api/api.types';
import {mocks} from './mocks';

type DataCollection<T extends ApiModel.ApiEntity> = {
  [id: string]: T;
};

export class AsyncStorageClient implements ApiModel.ApiClientImplementation {
  private static normilizeEntitiesArray(arr: ApiModel.ApiEntity[]) {
    return arr.reduce((result, entity) => {
      return {
        ...result,
        [entity.id]: entity,
      };
    }, {} as DataCollection<ApiModel.ApiEntity>);
  }

  private static initMockedData() {
    // FIXME: presist data - check if it exists before the initialisation
    const dataToSet = Object.entries(mocks).map(
      ([endpoint, data]) =>
        [endpoint, JSON.stringify(this.normilizeEntitiesArray(data))] as [
          string,
          string,
        ],
    );

    AsyncStorage.multiSet(dataToSet);
  }

  constructor() {
    AsyncStorageClient.initMockedData();
  }

  private async getAllFromStorage<T extends ApiModel.ApiEntity>(
    endpoint: string,
  ) {
    const resJson = await AsyncStorage.getItem(endpoint);
    return resJson != null
      ? (JSON.parse(resJson) as DataCollection<T>)
      : undefined;
  }

  private async getItem<T extends ApiModel.ApiEntity>(
    endpoint: string,
    id: string,
  ) {
    const data = await this.getAllFromStorage<T>(endpoint);

    return data?.[id];
  }

  private async getList<
    T extends ApiModel.ApiEntity,
    Params extends ApiModel.QueryParams = {},
  >(endpoint: string, _params: Params | undefined) {
    // FIXME: implement pagination with params

    const collection = await this.getAllFromStorage<T>(endpoint);
    if (!collection) {
      return;
    }

    const data = Object.values(collection);
    return {
      data,
      total: data.length,
    };
  }

  private parsePath(path: string) {
    const [endpoint, id] = path.split('/').filter(Boolean);
    return [endpoint, id];
  }

  get<T extends ApiModel.ApiEntity>(path: string) {
    const [endpoint, id] = this.parsePath(path);

    return this.getItem<T>(endpoint, id);
  }

  list<T extends ApiModel.ApiEntity, Params extends ApiModel.QueryParams = {}>(
    path: string,
    params?: Params,
  ) {
    const [endpoint] = this.parsePath(path);

    return this.getList<T>(endpoint, params);
  }

  async patch<T extends ApiModel.ApiEntity>(path: string, data: Partial<T>) {
    const [endpoint, id] = this.parsePath(path);

    const collection = await this.getAllFromStorage<T>(endpoint);

    if (!id || !collection) {
      throw new Error('No item to patch');
    }

    collection[id] = {
      ...collection[id],
      ...data,
    };

    await AsyncStorage.setItem(endpoint, JSON.stringify(collection));

    return collection[id];
  }
}
