import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { ProductService } from '../../../services/product.service';
import { Product } from '../../../model/product.model';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import { Cart } from '../../../model/cart.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.less']
})
export class ProductDetailComponent implements OnInit {

  public static updateProduct: Subject<Product> = new Subject();

  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
    private cart: Cart,
    private auth: AuthService
  ) {
    ProductDetailComponent.updateProduct.subscribe(updatedProduct => {
      this.product = updatedProduct;
   });
  }

  /**
   * Get Product by product id stored in route parameters.
   */
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
          return this.productService.getById(params.get('id'));
      })
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

  /**
   * Delete current product.
   */
  delete(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.goBack();
    });
  }

  /**
   * Add current product to cart.
   */
  addProductToCart(): void {
    this.cart.addLine(this.product);
  }

  get authenticated(): boolean {
    return this.auth.authenticated;
  }
}
