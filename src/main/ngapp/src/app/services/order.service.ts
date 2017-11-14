import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/from';

import { Order } from '../model/order.model';
import { ORDERS } from '../../mock-data/orders-mock';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {

//   constructor(private http: HttpClient) {
//     super('api/order', []);
//   }

    create(entity: Order): Observable<Order> {
        entity.id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });

        // this.fakeEntities.push(entity);
        return  Observable.from([entity]);
    }
}
