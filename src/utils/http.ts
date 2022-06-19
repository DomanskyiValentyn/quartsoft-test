import
axios,
{
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
} from 'axios';

import store from '@/store';

class Http {
  get service(): AxiosInstance {
    return axios.create({
      baseURL: process.env.VUE_APP_BACKEND_URL,
    });
  }

  public post<T>(path: string, payload?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.service.post(path, payload, config);
  }

  public get<T>(path: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.service.get(path, { ...config });
  }

  public put<T>(path: string, payload?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.service.put(path, payload, config);
  }

  public patch<T>(path: string, payload?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.service.patch(path, payload, config);
  }

  public delete<T>(path: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.service.delete(path, config);
  }
}

export default new Http();
