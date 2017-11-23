import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsListComponent } from '../components/product/list/products-list.component';
import { ProductDetailComponent } from '../components/product/detail/product-detail.component';
import { ProductModalComponent } from '../components/product/modal/product-modal.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { CartDetailComponent } from '../components/cart/detail/cart-detail.component';
import { StoreFirstGuard } from '../guards/storeFirst.guard';
import { CheckoutComponent } from '../components/checkout/checkout.component';
import { AuthComponent } from '../components/auth/auth.component';
import { AuthGuard } from '../guards/auth.guard';
import { BuyersTableComponent } from '../components/buyer/table/buyers-table.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
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
  {
    path: 'products',
    component: ProductsListComponent,
    children: [
      {
        path: 'new',
        component: ProductModalComponent,
        canActivate: [ AuthGuard ]
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
        component: ProductModalComponent,
        canActivate: [ AuthGuard ]
      }
    ],
    canActivate: [ StoreFirstGuard ]
  },
  {
    path: 'buyers',
    component: BuyersTableComponent,
    canActivate: [ StoreFirstGuard ] // AuthGuard
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
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ StoreFirstGuard, AuthGuard ]
})
export class AppRoutingModule {}
