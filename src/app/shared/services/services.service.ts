import { Service } from './../model/service.model';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { BaseApiService } from './base-api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicesService extends BaseApiService {
  private static readonly SERVICES_API = `${BaseApiService.BASE_API}/services`;

  constructor(private http: Http) {
    super();
  }

  list(): Observable<Array<Service>> {
    return this.http.get(ServicesService.SERVICES_API, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  get(id): Observable<Service> {
    return this.http.get(`${ServicesService.SERVICES_API}/${id}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }
}
