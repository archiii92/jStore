/**
 * Seller model.
 * @class
 */

import { Entity } from './entity.model';

export class Seller extends Entity {
    companyName: string;
    address: string;
    city: string;
    country: string;
    phone: string;
}
