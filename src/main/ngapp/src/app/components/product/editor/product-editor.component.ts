import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';
import 'jquery';
declare var $: any;

import { ProductService } from '../../../services/product.service';
import { Product } from '../../../model/product.model';

import { ProductDetailComponent } from '../../product/detail/product-detail.component';
import { ProductsListComponent } from '../../product/list/products-list.component';

@Component({
  templateUrl: 'product-editor.component.html',
  styleUrls: ['product-editor.component.less']
})
export class ProductEditorComponent implements OnInit {

  product: Product;
  editing = false;
  @ViewChild('productModal') productModal: ElementRef;

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
        if (id) {
          this.editing = true;
          return this.productService.getById(id);
        } else {
          this.editing = false;
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
    if (this.editing) {
      this.productService.update(this.product)
        .subscribe(() => {
          ProductDetailComponent.updateProduct.next(this.product);
          this.hide();
        });
    } else {
      this.productService.create(this.product)
        .subscribe((productId) => {
          this.product.id = productId;
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
