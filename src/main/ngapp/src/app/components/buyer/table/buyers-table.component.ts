import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../../../services/buyer.service';
import { Buyer } from '../../../model/buyer.model';
import { Location } from '@angular/common';

@Component({
  templateUrl: 'buyers-table.component.html'
})
export class BuyersTableComponent implements OnInit {

  buyers: Buyer[];

  constructor(
    private service: BuyerService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(buyers => this.buyers = buyers);
  }

  delete(id: string): void {
    this.service.delete(id).subscribe(() => {
      this.buyers.splice(this.buyers.findIndex((el)=> el.id === id), 1);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
