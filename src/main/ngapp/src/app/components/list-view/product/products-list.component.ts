import { Component, OnInit } from '@angular/core';

import { Product } from '../../../model/product.model';
import { ProductService } from '../../../services/product.service';

import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {

  public static updateProductsList: Subject<Product> = new Subject();

  products: Product[];
  units: string[] = ['штука', 'штуки', 'штук'];

  constructor(private productService: ProductService) {
    ProductsListComponent.updateProductsList.subscribe(newProduct => {
      this.products.push(newProduct);
    });
  }

  /**
   * Get all products.
   */
  ngOnInit(): void {
    this.productService.getAll()
      .then(products => this.products = products);
  }

  /**
   * Declination of russian words.
   * @param n The number relative to which the declination is made.
   */
  unitsName(n: number): string {
    return this.units[(n%10===1 && n%100!==11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)];
  }
}
