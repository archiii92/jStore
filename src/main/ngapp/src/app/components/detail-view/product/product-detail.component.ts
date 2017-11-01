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

  product: Product
  mode: ViewModes;

  public static updateProduct: Subject<Product> = new Subject();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    ProductDetailComponent.updateProduct.subscribe(updatedProduct => {
      this.product = updatedProduct;
   });
  }

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

  delete(): void {
    this.productService.delete(this.product.id).then(() => {
      this.goBack();
    })
  }
}
