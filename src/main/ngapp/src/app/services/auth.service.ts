import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const PROTOCOL = 'http';
const PORT = 3500;
const API_URL = 'login';

@Injectable()
export class AuthService {
    private baseUrl: string;
    private auth_token: string;

    constructor(private http: HttpClient) {
        this.baseUrl = PROTOCOL + '://' + location.hostname + ':' + PORT + '/' + API_URL;
      }

    authenticate(username: string, password: string): Observable<boolean> {
        return this.http.post<LoginResponse>(this.baseUrl, {username: username, password: password})
            .map(response => {
                this.auth_token = response.success ? response.token : null;
                return response.success;
            });
    }

    get authenticated(): boolean {
        return this.auth_token !== null;
    }

    getToken(): string {
        return this.auth_token;
    }

    clear() {
        this.auth_token = null;
    }
}

class LoginResponse {
    success: boolean;
    token: null;
}
