import { User } from './../model/user.model';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Http, Response } from '@angular/http';

@Injectable()
export class UsersService extends BaseApiService {
  private static readonly USERS_API = `${BaseApiService.BASE_API}/users`;

  constructor(private http: Http) {
    super();
  }

  create(user: User): Observable<User> {
    return this.http.post( UsersService.USERS_API, JSON.stringify(user), BaseApiService.defaultOptions )
      .map( res => res.json() )
      .catch( error => this.handleError(error) );
  }

  list(): Observable<Array<User>> {
    return this.http.get(UsersService.USERS_API, BaseApiService.defaultOptions)
      .map( res => res.json() )
      .catch(error => this.handleError(error));
  }

  checkEmail(email): Observable<any> {
    return this.http.post(`${UsersService.USERS_API}/check`, JSON.stringify(email), BaseApiService.defaultOptions)
      .map( (res: Response) => res.text())
      .catch( error => this.handleError(error));
  }

}
