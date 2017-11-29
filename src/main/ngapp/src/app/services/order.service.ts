import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Order } from '../model/order.model';
import { GenericService } from './generic-service';

const API_URL = 'orders';

@Injectable()
export class OrderService extends GenericService<Order> {
  constructor(http: HttpClient) {
    super(http, API_URL);
  }
}

    // create(entity: Order): Observable<Order> {
    //     entity.id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    //         const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    //         return v.toString(16);
    //     });

    //     // this.fakeEntities.push(entity);
    //     return  Observable.from([entity]);
    // }
