import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Product } from '../../../entities/product';
import { ProductService } from '../../../services/product.service';
import { ViewModes } from '../../../utils/viewModes';

@Component({
  selector: 'product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.less']
})
export class ProductEditComponent implements OnInit {

  @Input() product: Product;
  mode: ViewModes;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.parent.paramMap
      .switchMap((params: ParamMap) => {
        const id = params.get('id');
        if (id){
          this.mode = ViewModes.Edit;
          return this.productService.getProduct(id);
        } else {
          this.mode = ViewModes.New;
          return Promise.resolve(new Product());
        }
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
