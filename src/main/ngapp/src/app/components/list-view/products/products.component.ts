import { Component, OnInit } from '@angular/core';

import { Product } from '../../../entities/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'products-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .then(products => this.products = products);
  }
}
