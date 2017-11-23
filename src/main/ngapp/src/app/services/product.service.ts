import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../model/product.model';
import { GenericService } from './generic-service';

const API_URL = 'products';

@Injectable()
export class ProductService extends GenericService<Product> {
  constructor(http: HttpClient) {
    super(http, API_URL);
  }
}
