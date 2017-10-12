import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Buyer } from '../entities/buyer';
import { BUYERS } from '../../mock-data/buyers-mock';

@Injectable()
export class BuyerService {
  private url = 'api/buyer';

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getBuyers(): Promise<Buyer[]> {
    return Promise.resolve(BUYERS);
  }

  getBuyer(id: string): Promise<Buyer> {
    return Promise.resolve(BUYERS.find(x => x.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
