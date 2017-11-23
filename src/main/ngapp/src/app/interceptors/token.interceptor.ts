import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http/src/interceptor";
import { HttpRequest, HttpEvent, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { AuthService } from "../services/auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.method !== 'GET') {
            const auth = this.injector.get(AuthService);
            if (auth.authenticated) {
                req = req.clone({
                    setHeaders: {
                        Authorization: `Bearer<${auth.getToken()}>`
                    }
                });
            }
        }
        return next.handle(req);
    }
}
