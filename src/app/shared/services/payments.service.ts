import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Http, Response } from '@angular/http';
import { Payment } from '../model/payment.model';
import { Notification } from './../model/notification.model';
import { NotificationsToastsService } from './notifications.service';

@Injectable()
export class PaymentsService extends BaseApiService {
  private static readonly PAYMENTS_API = `${BaseApiService.BASE_API}/payment`;
  private static readonly PAYPAL_API = `${BaseApiService.BASE_API}/paypal`;
  private message: Notification = {
      type: 'success',
      title: 'New Payment',
      content: 'Payment successfully created'
  }

  constructor(private http: Http, private _notifService: NotificationsToastsService) {
    super();
  }

  list(): Observable<Array<Payment>> {
    return this.http.get(PaymentsService.PAYMENTS_API, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  get(id: string): Observable<Payment> {
    return this.http.get(`${PaymentsService.PAYMENTS_API}/${id}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  pay(id: string): any {
    return this.http.post(`${PaymentsService.PAYPAL_API}/${id}`, JSON.stringify({id}), BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  create(payment: Payment): Observable<Payment> {
    return this.http.post(PaymentsService.PAYMENTS_API, JSON.stringify(payment), BaseApiService.defaultOptions)
      .map( (res: Response) => {
         this._notifService.create(this.message);
         return res.json();
      })
      .catch(error => this.handleError(error));
  }

}
