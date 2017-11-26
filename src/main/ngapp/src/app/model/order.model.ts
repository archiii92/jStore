import { Injectable } from '@angular/core';
import { Cart } from './cart.model';
import { Entity } from './entity';

@Injectable()
export class Order extends Entity {
    public name: string;
    public address: string;
    public city: string;
    public state: string;
    public zip: string;
    public country: string;
    public shipped: boolean;

    constructor(public cart: Cart) {
        super();
    }

    clear() {
        this.id = null;
        this.name = this.address = this.city = null;
        this.state = this.zip = this.country = null;
        this.shipped = false;
        this.cart.clear();
    }
}