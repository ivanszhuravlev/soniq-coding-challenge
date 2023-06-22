import {apiClient} from './api.client';
import {ApiModel} from './api.types';

export class ApiService<T extends ApiModel.ApiEntity> {
  private path: string;

  constructor(basePath: string) {
    this.path = basePath;
  }

  get<P extends ApiModel.QueryParams>(id: string, params?: P) {
    return apiClient.get<T>(`${this.path}/${id}`, params);
  }

  list<P extends ApiModel.QueryParams>(params?: P) {
    return apiClient.list<T>(this.path, params);
  }

  patch<P extends ApiModel.QueryParams>(data: Partial<T>, params?: P) {
    return apiClient.patch<T>(this.path, data, params);
  }
}
