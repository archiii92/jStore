import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '../components/app/app.component';
import { AppRoutingModule } from './app-routing.module';

import { BuyerService } from '../services/buyer.service';
import { SellerService } from '../services/seller.service';
import { OrderService } from '../services/order.service';
import { ProductService } from '../services/product.service';

import { ProductsListComponent } from '../components/product/list/products-list.component';
import { ProductDetailComponent } from '../components/product/detail/product-detail.component';
import { ProductModalComponent } from '../components/product/modal/product-modal.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { CartSummaryComponent } from '../components/cart/summary/cart-summary.component';
import { CartDetailComponent } from '../components/cart/detail/cart-detail.component';
import { CheckoutComponent } from '../components/checkout/checkout.component';
import { Cart } from '../model/cart.model';
import { Order } from '../model/order.model';
import { AuthService } from '../services/auth.service';
import { AuthComponent } from '../components/auth/auth.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../interceptors/token.interceptor';
import { NotAuthorizedInterceptor } from '../interceptors/notAuthorized.interceptor';
import { BuyersTableComponent } from '../components/buyer/table/buyers-table.component';

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
    ProductModalComponent,
    PageNotFoundComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
    AuthComponent,
    BuyersTableComponent
  ],
  providers: [
    ProductService,
    BuyerService,
    OrderService,
    Cart,
    Order,
    AuthService,
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
