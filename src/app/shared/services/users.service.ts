import { User } from './../model/user.model';
import { Notification } from './../model/notification.model';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Http, Response, RequestOptions } from '@angular/http';
import { NotificationsToastsService } from './notifications.service';

@Injectable()
export class UsersService extends BaseApiService {
  private static readonly USERS_API = `${BaseApiService.BASE_API}/users`;
  private message: Notification = {
      type: 'success',
      title: '',
      content: ''
  };

  constructor(private http: Http, private _notifService: NotificationsToastsService) {
    super();
  }

  create(user: User): Observable<User> {
    return this.http.post( UsersService.USERS_API, JSON.stringify(user), BaseApiService.defaultOptions )
      .map( res => {
        this.message.title = 'User Account';
        this.message.content = 'Your account has been successfully created';
        this._notifService.create(this.message);
        return res.json();
      })
      .catch( error => this.handleError(error) );
  }

  list(): Observable<Array<User>> {
    return this.http.get(UsersService.USERS_API, BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }

  checkEmail(email): Observable<any> {
    return this.http.post(`${UsersService.USERS_API}/check`, JSON.stringify(email), BaseApiService.defaultOptions)
      .map( (res: Response) => res.text())
      .catch( error => this.handleError(error));
  }

  get(id: string): Observable<User> {
    return this.http.get(`${UsersService.USERS_API}/${id}`, BaseApiService.defaultOptions)
      .map( (res: Response) => res.json())
      .catch( error => this.handleError(error) );
  }

  edit(user: User): Observable<User> {
    user = User.fromJson(user);
    return this.http.post(`${UsersService.USERS_API}/${user.id}`, user.asFormData(), new RequestOptions({ withCredentials: true}))
      .map( (res: Response) => {
        this.message.title = 'User updated';
        this.message.content = 'Your user has been successfully updated';
        this._notifService.create(this.message);
        return res.json();
      })
      .catch( error => this.handleError(error));
  }

  pair(code, user: User): Observable<User> {
    return this.http.put(`${UsersService.USERS_API}/${user.id}/latch`, JSON.stringify({code: code}), BaseApiService.defaultOptions)
      .map( (res: Response) => {
        this.message.title = 'Paired with Latch';
        this.message.content = 'Your user has been successfully paired with Latch';
        this._notifService.create(this.message);
        return res.json();
      })
      .catch( error => this.handleError(error));
  }

}
