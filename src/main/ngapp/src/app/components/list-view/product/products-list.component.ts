import { Component, OnInit } from '@angular/core';

import { Product } from '../../../entities/product';
import { ProductService } from '../../../services/product.service';

import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html'
})

export class ProductsListComponent implements OnInit {
  
  products: Product[];
  units: string[] = ['штука', 'штуки', 'штук'];
  public static updateProductsList: Subject<Product> = new Subject();

  constructor(private productService: ProductService) {
    ProductsListComponent.updateProductsList.subscribe(newProduct => {
      this.products.push(newProduct);
    });
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .then(products => this.products = products);
  }

  unitsName(n: number): string {
    return this.units[(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)];
  }
}
