import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { Order } from '../../model/order.model';
import { BuyerService } from '../../services/buyer.service';
import { SellerService } from '../../services/seller.service';
import { Buyer } from '../../model/buyer.model';
import { Seller } from '../../model/seller.model';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Cart } from '../../model/cart.model';
import { Product } from '../../model/product.model';

@Component({
    templateUrl: 'checkout.component.html'
})
export class CheckoutComponent implements OnInit{
    orderSent = false;
    // submitted = false;
    buyers: Buyer[] = [];
    sellers: Seller[] = [];
    //order: Order;

    @ViewChild('buyerSelect') buyerSelect: ElementRef;
    @ViewChild('sellerSelect') sellerSelect: ElementRef;

    constructor(
      private orderService: OrderService,
      private cart: Cart,
      private buyerService: BuyerService,
      private sellerService: SellerService
    ) {}

    ngOnInit(): void {
      this.buyerService.getAll().subscribe(buyers => this.buyers = buyers);
      this.sellerService.getAll().subscribe(sellers => this.sellers = sellers);
    }

    submitOrder(form: NgForm) {
      // this.submitted = true;
      if (form.valid) {
        //this.order = ;

        this.orderService.create(new Order(this.buyerSelect.nativeElement.value, this.sellerSelect.nativeElement.value, this.cart.lines)).subscribe(order => {
            // this.order.clear();
            this.orderSent = true;
            // this.submitted = false;
        });
      }
    }
}
