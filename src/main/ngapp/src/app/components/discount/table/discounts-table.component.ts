import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Subject} from 'rxjs/Subject';
import {Discount} from '../../../model/discount.model';
import {DiscountService} from '../../../services/discount.service';

@Component({
    templateUrl: 'discounts-table.component.html'
})
export class DiscountsTableComponent implements OnInit {

    public static updateDiscount: Subject<Discount> = new Subject();
    public static addDiscount: Subject<Discount> = new Subject();
    discounts: Discount[];

    constructor(private service: DiscountService,
                private location: Location) {
        DiscountsTableComponent.updateDiscount.subscribe(discount => {
            this.discounts[this.discounts.findIndex(el => el.id === discount.id)] = discount;
        });
        DiscountsTableComponent.addDiscount.subscribe(discount => {
            this.discounts.push(discount);
        });
    }

    ngOnInit(): void {
        this.service.getAll().subscribe(discounts => this.discounts = discounts);
    }

    delete(id: string): void {
        this.service.delete(id).subscribe(() => {
            this.discounts.splice(this.discounts.findIndex(el => el.id === id), 1);
        });
    }

    goBack(): void {
        this.location.back();
    }
}
