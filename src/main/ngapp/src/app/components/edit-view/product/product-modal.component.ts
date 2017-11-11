import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { switchMap } from 'rxjs/operators';
import 'jquery';
declare var $: any;

import { ProductService } from '../../../services/product.service';
import { Product } from '../../../model/product.model';
import { ViewModes } from '../../../utils/viewModes';

import { ProductDetailComponent } from '../../detail-view/product/product-detail.component';
import { ProductsListComponent } from '../../list-view/product/products-list.component';

@Component({
  selector: 'product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.less']
})
export class ProductModalComponent implements OnInit {

  product: Product;
  mode: ViewModes;
  @ViewChild('productModal') productModal:ElementRef;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  /**
   * Set current modal view's product.
   */
  ngOnInit(): void {
    this.route.parent.paramMap
      .switchMap((params: ParamMap) => {
        const id = params.get('id');
        if (id){
          this.mode = ViewModes.Edit;
          return this.productService.getById(id);
        } else {
          this.mode = ViewModes.New;
          return Promise.resolve(new Product());
        }
      })
      .subscribe(product => {
        this.product = Object.assign({}, product);
        this.show();

        $(this.productModal.nativeElement).on('hidden.bs.modal', () => {
          this.goBack();
        });
      });
  }

  /**
   * Update or Create product.
   */
  save(): void {
    if (this.mode === 1){
      this.productService.update(this.product)
        .then(() => {
          ProductDetailComponent.updateProduct.next(this.product);
          this.hide();
        });
    } else {
      this.productService.create(this.product)
        .then((id) => {
          this.product.id = id;
          ProductsListComponent.updateProductsList.next(this.product);
          this.hide();
        });
    }
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
