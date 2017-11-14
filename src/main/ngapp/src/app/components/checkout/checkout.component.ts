import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { Order } from '../../model/order.model';

@Component({
    templateUrl: 'checkout.component.html'
})
export class CheckoutComponent {
    orderSent = false;
    submitted = false;

    constructor(public orderService: OrderService, public order: Order) {}

    submitOrder(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
            this.orderService.create(this.order).subscribe(order => {
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;
            });
        }
    }
}
