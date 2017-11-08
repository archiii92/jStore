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

import { ProductsListComponent } from '../components/list-view/product/products-list.component';
import { ProductDetailComponent } from '../components/detail-view/product/product-detail.component';
import { ProductModalComponent } from '../components/edit-view/product/product-modal.component';
// import { BuyersListComponent } from '../components/list-view//buyer/buyers.component';
// import { SellersListComponent } from '../components/list-view/seller/sellers.component';
// import { BuyerDetailComponent } from '../components/detail-view/buyer/buyer.component';
// import { SellerDetailComponent } from '../components/detail-view/seller/seller.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

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
    // BuyersListComponent,
    // SellersListComponent,
    // BuyerDetailComponent,
    // SellerDetailComponentб
    PageNotFoundComponent
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
