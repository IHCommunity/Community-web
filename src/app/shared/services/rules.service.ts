import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Http, Response } from '@angular/http';
import { Rule } from '../model/rule.model';

@Injectable()
export class RulesService extends BaseApiService {
  private static readonly RULES_API = `${BaseApiService.BASE_API}/rules`;

  constructor(private http: Http) {
    super();
  }

  list(): Observable<Array<Rule>> {
    return this.http.get(RulesService.RULES_API, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

}
