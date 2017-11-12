import { Component } from '@angular/core';
import { Cart } from '../../model/cart.model';

import { declination } from '../../utils/declination';

@Component({
    selector: 'cart-summary',
    templateUrl: 'cartSummary.component.html'
})
export class CartSummaryComponent {
    products: [string, string, string] = ['товар', 'товара', 'товаров'];

    constructor(public cart: Cart) { }

    productsName(n: number): string {
        return declination(this.products, n);
    }
}
