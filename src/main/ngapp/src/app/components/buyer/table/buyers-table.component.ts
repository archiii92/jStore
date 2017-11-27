import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../../../services/buyer.service';
import { Buyer } from '../../../model/buyer.model';
import { Location } from '@angular/common';
import { Subject } from 'rxjs/Subject';

@Component({
  templateUrl: 'buyers-table.component.html'
})
export class BuyersTableComponent implements OnInit {

  public static updateBuyer: Subject<Buyer> = new Subject();
  public static addBuyer: Subject<Buyer> = new Subject();
  buyers: Buyer[];

  constructor(
    private service: BuyerService,
    private location: Location
  ) {
    BuyersTableComponent.updateBuyer.subscribe(buyer => {
      this.buyers[this.buyers.findIndex((el)=> el.id === buyer.id)] = buyer;
    });
    BuyersTableComponent.addBuyer.subscribe(buyer => {
      this.buyers.push(buyer);
    });
  }

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
