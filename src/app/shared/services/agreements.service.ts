import { Meeting } from './../model/meeting.model';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Agreement } from '../model/agreement.model';
import { Http, Response } from '@angular/http';

@Injectable()
export class AgreementsService extends BaseApiService {
  private static readonly AGREEMENTS_API = `${BaseApiService.BASE_API}/meetings/agreements`;
  private static readonly MEETINGS_API = `${BaseApiService.BASE_API}/meetings`;

  constructor(private http: Http) {
    super();
  }

  get(id: string): Observable<Agreement> {
    return this.http.get(`${AgreementsService.AGREEMENTS_API}/${id}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  create(id: string, agreement: Agreement): Observable<Meeting> {
    return this.http.post(`${AgreementsService.MEETINGS_API}/${id}/agreements`, JSON.stringify(agreement), BaseApiService.defaultOptions)
      .map( (res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  calculateDisagreeWidth(agreement: Agreement) {
    if (agreement.disagree === undefined || agreement.agree === undefined) {
      return '0%';
    }

    const peopleDisagree: number = agreement.disagree.length;
    const peopleAgree: number = agreement.agree.length;
    const totalPeople: number = peopleDisagree + peopleAgree;
    const result = peopleDisagree / totalPeople * 100;

    return `${result}%`;

  }

  calculateAgreeWidth(agreement: Agreement) {
    if (agreement.disagree === undefined || agreement.agree === undefined) {
      return '0%';
    }

    const peopleDisagree: number = agreement.disagree.length;
    const peopleAgree: number = agreement.agree.length;
    const totalPeople: number = peopleDisagree + peopleAgree;
    const result = peopleAgree / totalPeople * 100;

    return `${result}%`;
  }

  vote(agreement: Agreement, accept: boolean): Observable<Agreement> {
    return this.http.put(`${AgreementsService.AGREEMENTS_API}/${agreement.id}`,
      JSON.stringify({ accept: accept }), BaseApiService.defaultOptions)
      .map( (res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

}
