/**
 * Product model.
 * @class
 */

import {Entity} from './entity.model';
import {Discount} from './discount.model';

export class Product extends Entity {
    discounts: Discount[] = [];
    name: string;
    unitPrice: number;
    descriptionShort: string;
    descriptionLong: string;
    unitsInStock: number;
    imageName: string;
    length: number;
    width: number;
    thickness: number;
    weight: number;
    display: string;
    displaySize: number;
    resolutionHeight: number;
    resolutionWidth: number;
}
