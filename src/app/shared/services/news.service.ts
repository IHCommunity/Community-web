import { BaseApiService } from './base-api.service';
import { Notice } from '../model/notice.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class NewsService extends BaseApiService {
  private static readonly PHONES_API = `${BaseApiService.BASE_API}/news`;

  constructor(private http: Http) {
    super();
  }

  
}
