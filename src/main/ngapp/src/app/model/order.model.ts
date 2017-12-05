/**
 * Order model.
 * @class
 */

import {CartLine} from './cart.model';
import {Entity} from './entity.model';
import {Buyer} from './buyer.model';
import {Seller} from './seller.model';
import {Product} from './product.model';

class orderDetail {
  product: Product = new Product();
  quantity: number;

  constructor(productId: string, quantity: number) {
    this.product.id = productId;
    this.quantity = quantity;
  }
}

export class Order extends Entity {
  orderDate: Date = new Date();
  buyer: Buyer = new Buyer();
  seller: Seller = new Seller();
  orderDetails: orderDetail[] = [];

  constructor(buyerId: string, sellerId: string, lines: CartLine[]) {
    super();

    this.buyer.id = buyerId;
    this.seller.id = sellerId;
    lines.forEach(line => this.orderDetails.push(new orderDetail(line.product.id, line.quantity)));
  }
}
