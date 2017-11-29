import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import 'jquery';
declare var $: any;

import { BuyersTableComponent } from '../table/buyers-table.component';
import { Buyer } from '../../../model/buyer.model';
import { BuyerService } from '../../../services/buyer.service';

@Component({
    templateUrl: 'buyer-editor.component.html'
})
export class BuyerEditorComponent implements OnInit {
  buyer: Buyer;
  editing = false;

  @ViewChild('buyerModal') modal: ElementRef;

  constructor(
    private service: BuyerService,
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
        return Promise.resolve(new Buyer());
      }
    }).subscribe(buyer => {
      this.buyer = Object.assign({}, buyer);
      this.show();

      $(this.modal.nativeElement).on('hidden.bs.modal', () => {
        this.goBack();
      });
    });
}

  /**
   * Update or Create buyer.
   */
  save(form: NgForm): void {
    if (this.editing) {
      this.service.update(this.buyer).subscribe(() => {
        BuyersTableComponent.updateBuyer.next(this.buyer);
        this.hide();
      });
    } else {
      this.service.create(this.buyer).subscribe((buyer) => {
        this.buyer.id = buyer.id;
        BuyersTableComponent.addBuyer.next(this.buyer);
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
