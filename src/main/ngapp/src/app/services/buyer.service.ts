import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Buyer } from '../model/buyer.model';
import { GenericService } from './generic-service';

const API_URL = 'buyers';

@Injectable()
export class BuyerService extends GenericService<Buyer> {
  constructor(http: HttpClient) {
    super(http, API_URL);
  }
}
