import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { ProductService } from '../../../services/product.service';
import { Product } from '../../../entities/product';
import { ViewModes } from '../../../utils/viewModes';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})

export class ProductDetailComponent implements OnInit {

  public static updateProduct: Subject<Product> = new Subject();

  product: Product
  mode: ViewModes;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
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
          return this.productService.getProduct(params.get('id'));
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
    this.productService.delete(this.product.id).then(() => {
      this.goBack();
    })
  }
}