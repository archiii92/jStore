import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../../../services/buyer.service';
import { Buyer } from '../../../model/buyer.model';

@Component({
  templateUrl: 'buyers-table.component.html'
})
export class BuyersTableComponent implements OnInit {

  buyers: Buyer[];

  constructor(private service: BuyerService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(buyers => this.buyers = buyers);
  }

  delete(id: string): void {
    this.service.delete(id).subscribe(() => {});
  }
}
