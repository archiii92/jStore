import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsListComponent } from '../components/list-view/product/products-list.component';
import { ProductDetailComponent } from '../components/detail-view/product/product-detail.component';
import { ProductModalComponent } from '../components/edit-view/product/product-modal.component';
// import { BuyersListComponent } from '../components/list-view//buyers/buyers.component';
// import { SellersListComponent } from '../components/list-view/sellers/sellers.component';
// import { BuyerDetailComponent } from '../components/detail-view/buyer/buyer.component';
// import { SellerDetailComponent } from '../components/detail-view/seller/seller.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { CartDetailComponent } from '../components/cartDetail/cartDetail.component';
import { StoreFirstGuard } from '../guards/storeFirst.guard';
import { CheckoutComponent } from '../components/checkout/checkout.component';
import { AuthComponent } from '../components/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsListComponent,
    children: [
      {
        path: 'new',
        component: ProductModalComponent
      }
    ],
    canActivate: [ StoreFirstGuard ]
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    children: [
      {
        path: 'edit',
        component: ProductModalComponent
      }
    ],
    canActivate: [ StoreFirstGuard ]
  },
  {
    path: 'cart',
    component: CartDetailComponent,
    canActivate: [ StoreFirstGuard ]
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [ StoreFirstGuard ]
  },
  // {
  //   path: "admin",
  //   loadChildren: "app/admin/admin.module#AdminModule",
  //   canActivate: [ StoreFirstGuard ]
  // },
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [ StoreFirstGuard ]
  },
  // { path: 'buyers',  component: BuyersListComponent },
  // { path: 'sellers',  component: SellersListComponent },

  // { path: 'buyer/:id', component: BuyerDetailComponent },
  // { path: 'seller/:id', component: SellerDetailComponent }
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ StoreFirstGuard ]
})
export class AppRoutingModule {}
