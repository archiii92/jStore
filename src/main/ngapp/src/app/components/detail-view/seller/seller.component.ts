import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Seller } from '../../../entities/seller';
import { SellerService } from '../../../services/seller.service';

@Component({
  selector: 'seller-detail',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerDetailComponent implements OnInit {

  @Input() seller: Seller;

  constructor(
    private sellerService: SellerService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.sellerService.getSeller(params.get('id')))
      .subscribe(seller => this.seller = seller);
  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   this.productService.update(this.product)
  //     .then(() => this.goBack());
  // }
}
