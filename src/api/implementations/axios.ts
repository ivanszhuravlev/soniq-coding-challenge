import axios, {AxiosInstance} from 'axios';
import {ApiModel} from 'api/api.types';

export class AxiosClient implements ApiModel.ApiClientImplementation {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'https://soniq-base-url.com/api',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  async get<T, Params extends ApiModel.QueryParams = {}>(
    path: string,
    params?: Params,
  ) {
    const data = await this.api.get<T>(path, {params});
    return data.data;
  }

  async list<T, Params extends ApiModel.QueryParams = {}>(
    path: string,
    params?: Params,
  ) {
    const data = await this.api.get<ApiModel.ApiList<T>>(path, {params});
    return data.data;
  }

  async patch<T, Params extends ApiModel.QueryParams = {}>(
    path: string,
    data: Partial<T>,
    params?: Params,
  ) {
    const res = await this.api.patch<T>(path, data, {params});
    return res.data;
  }
}
