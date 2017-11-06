/**
 * Creates a new Product.
 * @class
 */

import { Entity } from "./entity";

export class Product extends Entity {
    name: string = null;
    unitPrice: number = null;
    descriptionShort: string = null;
    descriptionLong: string = null;
    unitsInStock: number = null;
    imageName: string = null;
    length: number = null;
    width: number = null;
    thickness: number = null;
    weight: number = null;
    display: string = null;
    displaySize: number = null;
    resolutionHeight: number = null;
    resolutionWidth: number = null;
}
