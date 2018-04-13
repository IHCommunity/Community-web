import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Http, Response } from '@angular/http';
import { Meeting } from '../model/meeting.model';
import { Agreement } from '../model/agreement.model';

@Injectable()
export class MeetingsService extends BaseApiService {
  private static readonly MEETINGS_API = `${BaseApiService.BASE_API}/meetings/`;

  constructor(private http: Http) {
    super();
  }

  create(meeting: Meeting): Observable<Meeting> {
    return this.http.post(MeetingsService.MEETINGS_API, JSON.stringify(meeting), BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  getActive(): Observable<Meeting> {
    return this.http.get(`${MeetingsService.MEETINGS_API}/active`, BaseApiService.defaultOptions)
      .map( (res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

}
