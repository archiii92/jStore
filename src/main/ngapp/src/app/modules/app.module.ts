import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from '../components/app/app.component';
import { AppRoutingModule } from './app-routing.module';

import { BuyerService } from '../services/buyer.service';
import { SellerService } from '../services/seller.service';
import { OrderService } from '../services/order.service';
import { ProductService } from '../services/product.service';

import { ProductsListComponent } from '../components/list-view/products/products.component';
import { BuyersListComponent } from '../components/list-view//buyers/buyers.component';
import { SellersListComponent } from '../components/list-view/sellers/sellers.component';
import { ProductDetailComponent } from '../components/detail-view/product/product.component';
import { BuyerDetailComponent } from '../components/detail-view/buyer/buyer.component';
import { SellerDetailComponent } from '../components/detail-view/seller/seller.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ProductsListComponent,
    BuyersListComponent,
    SellersListComponent,
    ProductDetailComponent,
    BuyerDetailComponent,
    SellerDetailComponent
  ],
  providers: [
    ProductService,
    BuyerService,
    SellerService,
    OrderService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
