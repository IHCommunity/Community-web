import { SessionService } from './session.service';
import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(
    private sessionService: SessionService,
    private injector: Injector) { }

  handleError(error: any) {
    if (error.status === 403) {
      this.sessionService.logout()
        .subscribe( () => this.getRouterService().navigate(['/login']) );
    }
    throw error;
  }

  private getRouterService(): Router {
    return this.injector.get(Router);
  }
}
