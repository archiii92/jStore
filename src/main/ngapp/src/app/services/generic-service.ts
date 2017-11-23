import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entity } from '../model/entity';
import { Observable } from 'rxjs/Observable';

const PROTOCOL = 'http';
const PORT = 3500;

/**
 * Generic service class.
 * @class
 */
@Injectable()
export class GenericService<T extends Entity> {
    private baseUrl: string;
    private http: HttpClient;

    constructor(http: HttpClient, API_URL: string) {
        this.baseUrl = PROTOCOL + '://' + location.hostname + ':' + PORT + '/' + API_URL;
        this.http = http;
    }

    getAll(): Observable<Array<T>> {
        return this.http.get<Array<T>>(this.baseUrl);
    }

    getById(id: string): Observable<T> {
        return this.http.get<T>(this.baseUrl + '/' + id);
    }

    create(entity: T): Observable<T> {
        return this.http.post<T>(this.baseUrl, entity);
    }

    update(entity: T): Observable<T> {
        return this.http.put<T>(this.baseUrl + '/' + entity.id, entity);
    }

    delete(id: string): Observable<void> {
        return this.http.delete<void>(this.baseUrl + '/' + id);
    }
}
