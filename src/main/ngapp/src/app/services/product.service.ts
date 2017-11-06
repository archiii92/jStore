import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from '../entities/product';
import { PRODUCTS } from '../../mock-data/products-mock';
import { Service } from './service';

@Injectable()
export class ProductService extends Service<Product>{
  //url = 'api/products';

  //private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
    super('api/products', PRODUCTS);
  }

  // fillFakeData(): Product[] {
  //   debugger;
  //   PRODUCTS.forEach(product => this.create(product));
  //   return PRODUCTS;
  // }

  // getAll(): Promise<Product[]> {

  //   // return this.http.get(this.url)
  //   // .toPromise()
  //   // .then(response => {
  //   //   debugger;
  //   //   return response.json() as Product[]
  //   // })
  //   // .then(products => {
  //   //   debugger;
  //   //   if (products.length === 0) return this.fillFakeData(); else return products;    
  //   // })
  //   // .catch(this.handleError);

  //   // return this.http.get(this.url + '/all')
  //   // .toPromise()
  //   // .then(response => response.json().data as Product[])
  //   // .catch(this.handleError);
  //   return Promise.resolve(PRODUCTS.slice());
  // }

  // getById(id: string): Promise<Product> {
  //   // const url = `${this.url}/${id}`;
  //   // return this.http.get(url)
  //   //   .toPromise()
  //   //   .then(response => response.json().data as Product)
  //   //   .catch(this.handleError);
  //   return Promise.resolve(PRODUCTS.find(x => x.id === id));
  // }

  // update(product: Product): Promise<void> {
  //   // const url = `${this.url}/${product.id}`;
  //   // return this.http
  //   //   .put(url, JSON.stringify(product), {headers: this.headers})
  //   //   .toPromise()
  //   //   .then(() => product)
  //   //   .catch(this.handleError);
  //   const oldProduct = PRODUCTS.find(x => x.id === product.id);
  //   const ind = PRODUCTS.indexOf(oldProduct);
  //   PRODUCTS.splice(ind, 1, product);
  //   return Promise.resolve();
  // }

  // create(product: Product): Promise<string> {
  //   // return this.http
  //   //   .post(this.url, JSON.stringify(product), {headers: this.headers})
  //   //   .toPromise()
  //   //   .then(res => {
  //   //     debugger;
  //   //     return res.json();
  //   //   })
  //   //   .catch(this.handleError);

  //   product.id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
  //     const r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
  //     return v.toString(16);
  //   });

  //   PRODUCTS.push(product);
  //   return Promise.resolve(product.id );
  // }

  // delete(id: string): Promise<void> {
  //   // const url = `${this.heroesUrl}/${id}`;
  //   // return this.http.delete(url, {headers: this.headers})
  //   //   .toPromise()
  //   //   .then(() => null)
  //   //   .catch(this.handleError);
  //   const oldProduct = PRODUCTS.find(x => x.id === id);
  //   const ind = PRODUCTS.indexOf(oldProduct);
  //   PRODUCTS.splice(ind, 1);
  //   return Promise.resolve();
  // }

  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error);
  //   return Promise.reject(error.message || error);
  // }
}
