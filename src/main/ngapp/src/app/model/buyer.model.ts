/**
 * Buyer model.
 * @class
 */

import { Entity } from './entity';

export class Buyer extends Entity {
    id: string = null;
    firstName: string = null;
    lastName: string = null;
    birthDate: Date = null;
    address: string = null;
    city: string = null;
    country: string = null;
    homePhone: string = null;
    email: string = null;
}
