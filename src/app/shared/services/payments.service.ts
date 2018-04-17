import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Http, Response } from '@angular/http';
import { Payment } from '../model/payment.model';

@Injectable()
export class PaymentsService extends BaseApiService {
  private static readonly PAYMENTS_API = `${BaseApiService.BASE_API}/payment`;

  constructor(private http: Http) {
    super();
  }

  list(): Observable<Array<Payment>> {
    return this.http.get(PaymentsService.PAYMENTS_API, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

}
