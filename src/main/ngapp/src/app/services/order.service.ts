import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Order } from '../model/order';
import { ORDERS } from '../../mock-data/orders-mock';

@Injectable()
export class OrderService {
  private url = 'api/order';

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getOrders(): Promise<Order[]> {
    return Promise.resolve(ORDERS);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
