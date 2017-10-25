import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';
import "jquery";
declare var $: any;

import { Product } from '../../../entities/product';
import { ProductService } from '../../../services/product.service';
import { ViewModes } from '../../../utils/viewModes';
import { ProductDetailComponent } from '../../detail-view/product/product-detail.component';

@Component({
  selector: 'product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.less']
})
export class ProductModalComponent implements OnInit {
  originalProduct: Product;
  product: Product;
  mode: ViewModes;
  @ViewChild('productModal') productModal:ElementRef;

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
      .subscribe(product => {
        this.originalProduct = product;
        this.product = Object.assign({}, product);
        this.show();

        $(this.productModal.nativeElement).on("hidden.bs.modal", () => {
          this.goBack();
        });
      });
  }

  save(): void {
    this.productService.update(this.product)
      .then(() => {
        ProductDetailComponent.updateProduct.next(true);
        this.hide();
      });
  }

  goBack(): void {
    this.location.back();
  }

  show(): void {
    $(this.productModal.nativeElement).modal('show');
  }

  hide(): void {
    $(this.productModal.nativeElement).modal('hide');
  }
}
