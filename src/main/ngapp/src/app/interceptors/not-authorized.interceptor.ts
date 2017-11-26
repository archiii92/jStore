import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http/src/interceptor';
import { HttpRequest, HttpEvent, HttpHandler, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class NotAuthorizedInterceptor implements HttpInterceptor {

    constructor(
      private injector: Injector,
      private router: Router
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(req).do((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // do stuff with response if you want
          }
        }, (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              const auth = this.injector.get(AuthService);
              this.router.navigateByUrl('/auth');
            }
          }
        });
    }
}
