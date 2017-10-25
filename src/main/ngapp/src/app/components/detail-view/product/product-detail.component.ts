import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Product } from '../../../entities/product';
import { ProductService } from '../../../services/product.service';
import { ViewModes } from '../../../utils/viewModes';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent implements OnInit {

  product: Product
  mode: ViewModes;

  public static updateProduct: Subject<boolean> = new Subject();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    ProductDetailComponent.updateProduct.subscribe(res => {
      this.route.paramMap
      .switchMap((params: ParamMap) => {
          return this.productService.getProduct(params.get('id'));
      })
      .subscribe(product => this.product = product);
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

  // save(): void {
  //   this.productService.update(this.product)
  //     .then(() => this.goBack());
  // }
}
