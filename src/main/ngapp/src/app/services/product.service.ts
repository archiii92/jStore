import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from '../entities/product';
import { PRODUCTS } from '../../mock-data/products-mock';

@Injectable()
export class ProductService {
  private url = 'api/product';

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getProducts(): Promise<Product[]> {
    // return this.http.get(this.url + '/all')
    // .toPromise()
    // .then(response => response.json().data as Product[])
    // .catch(this.handleError);
    return Promise.resolve(PRODUCTS);
  }

  getProduct(id: string): Promise<Product> {
    // const url = `${this.url}/${id}`;
    // return this.http.get(url)
    //   .toPromise()
    //   .then(response => response.json().data as Product)
    //   .catch(this.handleError);
    return Promise.resolve(PRODUCTS.find(x => x.id === id));
  }

  update(product: Product): Promise<Product> {
    //const url = `${this.url}/${product.id}`;
    // return this.http
    //   .put(url, JSON.stringify(product), {headers: this.headers})
    //   .toPromise()
    //   .then(() => product)
    //   .catch(this.handleError);
    var oldProduct = PRODUCTS.find(x => x.id === product.id);
    var ind = PRODUCTS.indexOf(oldProduct);
    PRODUCTS[ind] = product;
    return Promise.resolve(product);
  }

  // create(name: string): Promise<Hero> {
  //   return this.http
  //     .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
  //     .toPromise()
  //     .then(res => res.json().data as Hero)
  //     .catch(this.handleError);
  // }

  // delete(id: number): Promise<void> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.delete(url, {headers: this.headers})
  //     .toPromise()
  //     .then(() => null)
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
