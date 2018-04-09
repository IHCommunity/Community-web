import { User } from './../model/user.model';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Http } from '@angular/http';

const CURRENT_USER_KEY = 'currentUser';

@Injectable()
export class SessionService extends BaseApiService {
  private static readonly SESSION_API = `${BaseApiService.BASE_API}/session`;

  user: User;

  constructor(private http: Http) {
    super();
    this.user = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
  }

  authenticate(user: User): Observable<User> {
    return this.http.post(SessionService.SESSION_API, JSON.stringify(user), BaseApiService.defaultOptions)
      .map( res => {
        return this.doAuthentication(res.json());
      })
      .catch( error => this.handleError(error) );
  }

  logout(): Observable<void> {
    return this.http.delete(SessionService.SESSION_API, BaseApiService.defaultOptions)
      .map( res => {
        return this.doLogout();
      })
      .catch( error => this.handleError(error) );
  }

  private doAuthentication(user: User): User {
    this.user = user;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(this.user));
    return this.user;
  }

  protected doLogout(): void {
    this.user = null;
    localStorage.removeItem(CURRENT_USER_KEY);
  }
}
