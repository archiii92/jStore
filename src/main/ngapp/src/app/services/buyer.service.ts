import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Buyer } from '../model/buyer.model';
import { BUYERS } from '../../mock-data/buyers-mock';
import { GenericService } from './generic-service';
import { HttpClient } from '@angular/common/http';

const API_URL = 'buyers';

@Injectable()
export class BuyerService extends GenericService<Buyer> {
  constructor(http: HttpClient) {
    super(http, API_URL);
  }
}
