import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../../model/order.model';
import { Location } from '@angular/common';
import { Subject } from 'rxjs/Subject';
import { BuyerService } from '../../../services/buyer.service';
import { SellerService } from '../../../services/seller.service';
import { Buyer } from '../../../model/buyer.model';
import { Seller } from '../../../model/seller.model';

@Component({
  templateUrl: 'orders-table.component.html'
})
export class OrdersTableComponent implements OnInit {
  orders: Order[];
  buyers: Buyer[];
  sellers: Seller[];

  constructor(
    private orderService: OrderService,
    private buyerService: BuyerService,
    private sellerService: SellerService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.orderService.getAll().subscribe(orders => {
      this.orders = orders;
    });
    // this.buyerService.getAll().subscribe(buyers => {
    //   this.buyers = buyers;
    // });
    // this.sellerService.getAll().subscribe(sellers => {
    //   this.sellers = sellers;
    // });
  }

  // getBuyersName(buyerId: string): string {
  //   //var buyer = null;
  //   this.buyerService.getById(buyerId).toPromise().then(buyer => {
  //     return buyer.firstName + ' ' + buyer.lastName;
  //   });
  // }

  delete(id: string): void {
    this.orderService.delete(id).subscribe(() => {
      this.orders.splice(this.orders.findIndex((el)=> el.id === id), 1);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
