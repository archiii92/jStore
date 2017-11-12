import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class Cart {
    public lines: CartLine[] = [];
    public itemCount: number = 0;
    public cartPrice: number = 0;

    addLine(product: Product, quantity: number = 1) {
        let line = this.lines.find(line => line.product.id == product.id);
        if (line != undefined) {
            line.quantity += quantity;
        } else {
            this.lines.push(new CartLine(product, quantity));
        }
        this.recalculate();
    }

    updateQuantity(productId: string, quantity: number = 1) {
        let line = this.lines.find(line => line.product.id == productId);
        if (line != undefined) {
            line.quantity = quantity;
        }
        this.recalculate();
    }

    removeLine(productId: string) {
        let index = this.lines.findIndex(line => line.product.id == productId);
        this.lines.splice(index);
        this.recalculate();
    }

    clear() {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }

    private recalculate() {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(line => {
            this.itemCount += line.quantity;
            this.cartPrice += (line.quantity * line.product.unitPrice);
        });
    }
}

export class CartLine {

    constructor(public product: Product, public quantity: number) {}

    get lineTotal() {
        return this.quantity * this.product.unitPrice;
    }
}