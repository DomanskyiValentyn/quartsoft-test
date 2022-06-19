import { ResponseRoot, SWAPI_RESOURCE } from '@/interface/other.interface';
import http from '@/utils/http';

class Requests {
  public getListByResource<T>(resource: SWAPI_RESOURCE, page = 1) {
    return http.get<ResponseRoot<T>>(`${resource}/?page=${page}`);
  }
}

export default new Requests();
