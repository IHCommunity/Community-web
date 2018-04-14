import { BaseApiService } from './base-api.service';
import { Notice } from '../model/notice.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class NewsService extends BaseApiService {
  private static readonly NEWS_API = `${BaseApiService.BASE_API}/news`;

  constructor(private http: Http) {
    super();
  }

  list(): Observable<Array<Notice>> {
    return this.http.get(NewsService.NEWS_API, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  listChecked(): Observable<Array<Notice>> {
    return this.http.get(`${NewsService.NEWS_API}/checked`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  listUnchecked(): Observable<Array<Notice>> {
    return this.http.get(`${NewsService.NEWS_API}/unchecked`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  get(id: string): Observable<Notice> {
    return this.http.get(`${NewsService.NEWS_API}/${id}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  delete(id: string): Observable<void> {
    return this.http.delete(`${NewsService.NEWS_API}/${id}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  edit(notice: Notice): Observable<Notice> {
    return this.http.put(`${NewsService.NEWS_API}/${notice.id}`, JSON.stringify(notice), BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  check(notice: Notice): Observable<Notice> {
    return this.http.put(`${NewsService.NEWS_API}/${notice.id}/check`, JSON.stringify(notice), BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }
}
