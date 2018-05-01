import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Http, Response } from '@angular/http';
import { Meeting } from '../model/meeting.model';
import { Agreement } from '../model/agreement.model';
import { NotificationsToastsService } from './notifications.service';

@Injectable()
export class MeetingsService extends BaseApiService {
  private static readonly MEETINGS_API = `${BaseApiService.BASE_API}/meetings/`;
  private message: Object = {
      type: 'success',
      title: 'New Meeting',
      content: 'Meeting successfully created'
  }

  constructor(private http: Http, private _notifService: NotificationsToastsService) {
    super();
  }

  create(meeting: Meeting): Observable<Meeting> {
    return this.http.post(MeetingsService.MEETINGS_API, JSON.stringify(meeting), BaseApiService.defaultOptions)
      .map((res: Response) => {
          this._notifService.create(this.message);
          return res.json();
      })
      .catch(error => this.handleError(error));
  }

  getActive(): Observable<Meeting> {
    return this.http.get(`${MeetingsService.MEETINGS_API}/active`, BaseApiService.defaultOptions)
      .map( (res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  getDeadlineTime(agreement: Agreement) {
    const deadLineTime = new Date(agreement.meeting.deadLine).getTime();
    const now = new Date().getTime();

    return this.convertMS(deadLineTime - now);
  }

  convertMS(ms) {
    let d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return  { d: d, h: h, m: m, s: s };
  }

  listResume(): Observable<Array<Meeting>> {
    return this.http.get(`${MeetingsService.MEETINGS_API}/resume`, BaseApiService.defaultOptions)
      .map( (res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  get(id: string): Observable<Meeting> {
    return this.http.get(`${MeetingsService.MEETINGS_API}/${id}`, BaseApiService.defaultOptions)
      .map( (res: Response) => res.json() )
      .catch(error => this.handleError(error));
  }

  getClosest(): Observable<Meeting> {
    return this.http.get(`${MeetingsService.MEETINGS_API}/closest`, BaseApiService.defaultOptions)
      .map( (res: Response) => {
        return res.json();
      })
      .catch(error => this.handleError(error));
  }

}
