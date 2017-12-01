import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

declare var $: any;
import 'jquery';

import { SellersTableComponent } from '../table/sellers-table.component';
import { Seller } from '../../../model/seller.model';
import { SellerService } from '../../../services/seller.service';

@Component({
    templateUrl: 'seller-editor.component.html'
})
export class SellerEditorComponent implements OnInit {
  seller: Seller;
  editing = false;

  @ViewChild('sellerModal') modal: ElementRef;

  constructor(
    private service: SellerService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.switchMap((params: ParamMap) => {
      const id = params.get('id');
      if (id) {
        this.editing = true;
        return this.service.getById(id);
      } else {
        this.editing = false;
        return Promise.resolve(new Seller());
      }
    }).subscribe(seller => {
      this.seller = Object.assign({}, seller);
      this.show();

      $(this.modal.nativeElement).on('hidden.bs.modal', () => {
        this.goBack();
      });
    });
}

  /**
   * Update or Create seller.
   */
  save(form: NgForm): void {
    if (this.editing) {
      this.service.update(this.seller).subscribe(() => {
        SellersTableComponent.updateSeller.next(this.seller);
        this.hide();
      });
    } else {
      this.service.create(this.seller).subscribe((sellerId) => {
        this.seller.id = sellerId;
        SellersTableComponent.addSeller.next(this.seller);
        this.hide();
      });
    }
  }

  goBack(): void {
    this.location.back();
  }

  show(): void {
    $(this.modal.nativeElement).modal('show');
  }

  hide(): void {
    $(this.modal.nativeElement).modal('hide');
  }
}
