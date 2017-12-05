/**
 * Discount model.
 * @class
 */

import {Entity} from './entity.model';
import {Product} from './product.model';

export class Discount extends Entity {
    product: Product;
    minimumQuantity: number;
    value: number;
}
