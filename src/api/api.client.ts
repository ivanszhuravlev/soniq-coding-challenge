import {ApiModel} from './api.types';
import {AsyncStorageClient} from './implementations/asyncStorage';

interface ApiConstructor {
  new (): ApiModel.ApiClientImplementation;
}

const ApiClient = (Implementation: ApiConstructor) => {
  return new Implementation();
};

export const apiClient = ApiClient(AsyncStorageClient);
