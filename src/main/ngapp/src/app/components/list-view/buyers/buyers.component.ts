import { Component, OnInit } from '@angular/core';

import { Buyer } from '../../../entities/buyer';
import { BuyerService } from '../../../services/buyer.service';

@Component({
  selector: 'buyers-list',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersListComponent implements OnInit {
  buyers: Buyer[] = [];

  constructor(private buyerService: BuyerService) { }

  ngOnInit(): void {
    this.buyerService.getBuyers()
      .then(buyers => this.buyers = buyers);
  }
}
