import { Injectable } from '@angular/core';
import { CartLine } from './cart.model';
import { Entity } from './entity.model';

class ProductAndQuantity {
  productId: string;
  quantity: number;

  constructor(productId: string, quantity: number) {
    this.productId = productId;
    this.quantity = quantity;
  }
}

export class Order extends Entity {
  orderDate: Date = new Date();
  buyerId: string = null;
  sellerId: string = null;
  positions: ProductAndQuantity[] = [];

  constructor(buyerId: string, sellerId: string, lines: CartLine[]) {
    super();

    this.buyerId = buyerId;
    this.sellerId = sellerId;
    lines.forEach(line => this.positions.push(new ProductAndQuantity(line.product.id, line.quantity)))
  }
}