/**
 * Seller model.
 * @class
 */

import { Entity } from './entity.model';

export class Seller extends Entity {
    id: string;
    companyName: string;
    address: string;
    city: string;
    country: string;
    phone: string;
}
