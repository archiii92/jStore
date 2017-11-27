import { Buyer } from './buyer.model';
import { Seller } from './seller.model';

export class Order {
    id: string;
    orderDate: Date;
    buyer: Buyer;
    seller: Seller;
}
