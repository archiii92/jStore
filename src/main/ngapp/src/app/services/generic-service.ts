import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Entity } from '../model/entity.model';
import { Observable } from 'rxjs/Observable';

const PROTOCOL = 'http';
// json-server
// const PORT = 3500;

// tomcat server
const PORT = 8080;

/**
 * Generic service class.
 * @class
 */
@Injectable()
export class GenericService<T extends Entity> {
    private baseUrl: string;
    private http: HttpClient;

    constructor(http: HttpClient, API_URL: string) {
        this.baseUrl = PROTOCOL + '://' + location.hostname + ':' + PORT + '/api/' + API_URL;
        this.http = http;
    }

    getAll(): Observable<Array<T>> {
        return this.http.get<Array<T>>(this.baseUrl);
    }

    getById(id: string): Observable<T> {
        return this.http.get<T>(this.baseUrl + '/' + id);
    }

    create(entity: T): Observable<string> {
        return this.http.post(this.baseUrl, entity, {responseType: 'text'});
    }

    update(entity: T): Observable<void> {
        return this.http.put<void>(this.baseUrl, entity);
    }

    // create(entity: T): Observable<string> {
    //     return this.http.post<string>(this.baseUrl, entity);
    // }

    // update(entity: T): Observable<void> {
    //     return this.http.put<void>(this.baseUrl + '/' + entity.id, entity);
    // }

    delete(id: string): Observable<void> {
        return this.http.delete<void>(this.baseUrl + '/' + id);
    }
}
