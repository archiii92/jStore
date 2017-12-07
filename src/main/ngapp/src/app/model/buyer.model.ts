/**
 * Buyer model.
 * @class
 */

import { Entity } from './entity.model';

export class Buyer extends Entity {
    firstName: string;
    lastName: string;
    birthDate: Date;
    address: string;
    city: string;
    country: string;
    homePhone: string;
    email: string;
}
