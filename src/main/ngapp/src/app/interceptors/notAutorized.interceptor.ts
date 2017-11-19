import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http/src/interceptor";
import { AuthService } from "../services/auth.service";
import { HttpRequest, HttpEvent, HttpHandler, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/do';

@Injectable()
export class NotAuthorizedInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              // do stuff with response if you want
            }
          }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
                // redirect to the login route
                // or show a modal
              }
            }
          });
    }
}
