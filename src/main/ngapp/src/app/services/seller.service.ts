import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Seller } from '../model/seller.model';
import { GenericService } from './generic-service';

const API_URL = 'sellers';

@Injectable()
export class SellerService extends GenericService<Seller> {
  constructor(http: HttpClient) {
    super(http, API_URL);
  }
}