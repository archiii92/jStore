import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Seller } from '../entities/seller';
import { SELLERS } from '../../mock-data/sellers-mock';

@Injectable()
export class SellerService {
  private url = 'api/seller';

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getSellers(): Promise<Seller[]> {
    return Promise.resolve(SELLERS);
  }

  getSeller(id: string): Promise<Seller> {
    return Promise.resolve(SELLERS.find(x => x.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
