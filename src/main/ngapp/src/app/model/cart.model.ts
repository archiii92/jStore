import {Injectable} from '@angular/core';
import {Product} from './product.model';

@Injectable()
export class CartLine {

    constructor(public product: Product, public quantity: number) {}

    get lineTotal() {
        return this.quantity * this.product.unitPrice;
    }
}

export class Cart {
    public lines: CartLine[] = [];
    public itemCount = 0;
    public cartPrice = 0;

    addLine(product: Product, quantity: number = 1) {
        const line = this.lines.find(l => l.product.id === product.id);
        if (line !== undefined) {
            line.quantity += quantity;
        } else {
            this.lines.push(new CartLine(product, quantity));
        }
        this.recalculate();
    }

    updateQuantity(productId: string, quantity: number = 1) {
        const line = this.lines.find(l => l.product.id === productId);
        if (line !== undefined) {
            line.quantity = +quantity;
        }
        this.recalculate();
    }

    removeLine(productId: string) {
        const index = this.lines.findIndex(l => l.product.id === productId);
        this.lines.splice(index, 1);
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

            // const lineDiscount = line.product.discounts
            //     .filter(discount => discount.minimumQuantity <= line.quantity)
            //     .map(discount => discount.value)
            //     .sort()

            this.cartPrice += (line.quantity * line.product.unitPrice);
        });
    }
}
