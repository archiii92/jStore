import { Component, OnInit } from '@angular/core';

import { Seller } from '../../../entities/seller';
import { SellerService } from '../../../services/seller.service';

@Component({
  selector: 'sellers-list',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersListComponent implements OnInit {
  sellers: Seller[] = [];

  constructor(private sellerService: SellerService) { }

  ngOnInit(): void {
    this.sellerService.getSellers()
      .then(sellers => this.sellers = sellers);
  }
}
