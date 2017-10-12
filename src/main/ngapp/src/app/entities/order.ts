import { Buyer } from './buyer';
import { Seller } from './seller';

export class Order {
    id: string;
    orderDate: Date;
    buyer: Buyer;
    seller: Seller;
}
