import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {TokenInterceptor} from '../interceptors/token.interceptor';
import {NotAuthorizedInterceptor} from '../interceptors/not-authorized.interceptor';

import {BuyerService} from '../services/buyer.service';
import {SellerService} from '../services/seller.service';
import {OrderService} from '../services/order.service';
import {ProductService} from '../services/product.service';
import {AuthService} from '../services/auth.service';
import {DiscountService} from '../services/discount.service';

import {Cart} from '../model/cart.model';

import {AppComponent} from '../components/app/app.component';
import {ProductsListComponent} from '../components/product/list/products-list.component';
import {ProductDetailComponent} from '../components/product/detail/product-detail.component';
import {ProductEditorComponent} from '../components/product/editor/product-editor.component';
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component';
import {CartSummaryComponent} from '../components/cart/summary/cart-summary.component';
import {CartDetailComponent} from '../components/cart/detail/cart-detail.component';
import {CheckoutComponent} from '../components/checkout/checkout.component';
import {AuthComponent} from '../components/auth/auth.component';
import {BuyersTableComponent} from '../components/buyer/table/buyers-table.component';
import {BuyerEditorComponent} from '../components/buyer/editor/buyer-editor.component';
import {SellersTableComponent} from '../components/seller/table/sellers-table.component';
import {SellerEditorComponent} from '../components/seller/editor/seller-editor.component';
import {OrdersTableComponent} from '../components/order/table/orders-table.component';
import {DiscountsTableComponent} from '../components/discount/table/discounts-table.component';
import {DiscountEditorComponent} from '../components/discount/editor/discount-editor.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductDetailComponent,
    ProductEditorComponent,
    PageNotFoundComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
    AuthComponent,
    BuyersTableComponent,
    BuyerEditorComponent,
    SellersTableComponent,
    SellerEditorComponent,
    OrdersTableComponent,
    DiscountsTableComponent,
    DiscountEditorComponent
  ],
  providers: [
    ProductService,
    BuyerService,
    OrderService,
    SellerService,
    Cart,
    AuthService,
    DiscountService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotAuthorizedInterceptor,
      multi: true
    }
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
