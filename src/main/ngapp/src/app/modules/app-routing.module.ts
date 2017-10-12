import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsListComponent } from '../components/list-view/products/products.component';
import { BuyersListComponent } from '../components/list-view//buyers/buyers.component';
import { SellersListComponent } from '../components/list-view/sellers/sellers.component';
import { ProductDetailComponent } from '../components/detail-view/product/product.component';
import { BuyerDetailComponent } from '../components/detail-view/buyer/buyer.component';
import { SellerDetailComponent } from '../components/detail-view/seller/seller.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products',  component: ProductsListComponent },
  { path: 'buyers',  component: BuyersListComponent },
  { path: 'sellers',  component: SellersListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'buyer/:id', component: BuyerDetailComponent },
  { path: 'seller/:id', component: SellerDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
