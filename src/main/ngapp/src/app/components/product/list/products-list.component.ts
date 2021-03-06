import { Component, OnInit } from '@angular/core';

import { Product } from '../../../model/product.model';
import { ProductService } from '../../../services/product.service';

import { Subject } from 'rxjs/Subject';
import { declination } from '../../../utils/declination';
import { AuthService } from '../../../services/auth.service';

@Component({
  templateUrl: 'products-list.component.html'
})
export class ProductsListComponent implements OnInit {

  public static updateProductsList: Subject<Product> = new Subject();

  products: Product[];
  units: [string, string, string] = ['штука', 'штуки', 'штук'];

  constructor(
    private productService: ProductService,
    private auth: AuthService
    ) {
    ProductsListComponent.updateProductsList.subscribe(newProduct => {
      this.products.push(newProduct);
    });
  }

  /**
   * Get all products.
   */
  ngOnInit(): void {
    this.productService.getAll()
      .subscribe(products => this.products = products);
  }

  unitsName(n: number): string {
    return declination(this.units, n);
  }

  get authenticated(): boolean {
    return this.auth.authenticated;
  }
}
