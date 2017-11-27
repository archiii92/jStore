import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../../services/seller.service';
import { Seller } from '../../../model/seller.model';
import { Location } from '@angular/common';
import { Subject } from 'rxjs/Subject';

@Component({
  templateUrl: 'sellers-table.component.html'
})
export class SellersTableComponent implements OnInit {

  public static updateSeller: Subject<Seller> = new Subject();
  public static addSeller: Subject<Seller> = new Subject();
  sellers: Seller[];

  constructor(
    private service: SellerService,
    private location: Location
  ) {
    SellersTableComponent.updateSeller.subscribe(seller => {
      this.sellers[this.sellers.findIndex((el)=> el.id === seller.id)] = seller;
    });
    SellersTableComponent.addSeller.subscribe(seller => {
      this.sellers.push(seller);
    });
  }

  ngOnInit(): void {
    this.service.getAll().subscribe(sellers => this.sellers = sellers);
  }

  delete(id: string): void {
    this.service.delete(id).subscribe(() => {
      this.sellers.splice(this.sellers.findIndex((el)=> el.id === id), 1);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
