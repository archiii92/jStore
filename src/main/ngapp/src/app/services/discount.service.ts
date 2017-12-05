import {Injectable} from "@angular/core";
import {GenericService} from "./generic-service";
import {Discount} from "../model/discount.model";
import {HttpClient} from "@angular/common/http";

const API_URL = 'discounts';

@Injectable()
export class DiscountService extends GenericService<Discount> {
    constructor(http: HttpClient) {
        super(http, API_URL);
    }
}
