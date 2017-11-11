import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Buyer } from '../../../model/buyer';
import { BuyerService } from '../../../services/buyer.service';

@Component({
  selector: 'buyer-detail',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.less']
})
export class BuyerDetailComponent implements OnInit {

  @Input() buyer: Buyer;

  constructor(
    private buyerService: BuyerService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.buyerService.getBuyer(params.get('id')))
      .subscribe(buyer => this.buyer = buyer);
  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   this.productService.update(this.product)
  //     .then(() => this.goBack());
  // }
}
