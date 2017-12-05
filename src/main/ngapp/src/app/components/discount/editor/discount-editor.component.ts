import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import {NgForm} from '@angular/forms';
import 'jquery';

import {DiscountsTableComponent} from '../table/discounts-table.component';
import {Discount} from '../../../model/discount.model';
import {DiscountService} from '../../../services/discount.service';
import {Product} from '../../../model/product.model';
import {ProductService} from '../../../services/product.service';

declare var $: any;

@Component({
    templateUrl: 'discount-editor.component.html'
})
export class DiscountEditorComponent implements OnInit {
    discount: Discount;
    products: Product[] = [];
    editing = false;

    @ViewChild('discountModal') modal: ElementRef;

    constructor(private discountService: DiscountService,
                private productService: ProductService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit(): void {
        this.route.paramMap.switchMap((params: ParamMap) => {
            const id = params.get('id');
            if (id) {
                this.editing = true;
                return this.discountService.getById(id);
            } else {
                this.editing = false;
                return Promise.resolve(new Discount());
            }
        }).subscribe(discount => {
            this.discount = Object.assign({}, discount);
            this.show();

            $(this.modal.nativeElement).on('hidden.bs.modal', () => {
                this.goBack();
            });
        });
        this.productService.getAll().subscribe(products => this.products = products);
    }

    /**
     * Update or Create discount.
     */
    save(form: NgForm): void {
        if (this.editing) {
            this.discountService.update(this.discount).subscribe(() => {
                DiscountsTableComponent.updateDiscount.next(this.discount);
                this.hide();
            });
        } else {
            this.discountService.create(this.discount).subscribe((discountId) => {
                this.discount.id = discountId;
                DiscountsTableComponent.addDiscount.next(this.discount);
                this.hide();
            });
        }
    }

    goBack(): void {
        this.location.back();
    }

    show(): void {
        $(this.modal.nativeElement).modal('show');
    }

    hide(): void {
        $(this.modal.nativeElement).modal('hide');
    }
}
