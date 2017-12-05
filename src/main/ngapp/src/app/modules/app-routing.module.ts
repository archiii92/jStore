import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from '../guards/auth.guard';
import {StoreFirstGuard} from '../guards/store-first.guard';

import {ProductsListComponent} from '../components/product/list/products-list.component';
import {ProductDetailComponent} from '../components/product/detail/product-detail.component';
import {ProductEditorComponent} from '../components/product/editor/product-editor.component';
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component';
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
        component: ProductEditorComponent,
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
        component: ProductEditorComponent,
        canActivate: [ AuthGuard ]
      }
    ],
    canActivate: [ StoreFirstGuard ]
  },
  {
    path: 'buyers',
    component: BuyersTableComponent,
    canActivate: [ StoreFirstGuard, AuthGuard ],
    children: [
      {
        path: 'edit/:id',
        component: BuyerEditorComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: 'new',
        component: BuyerEditorComponent,
        canActivate: [ AuthGuard ]
      }
    ],
  },
  {
    path: 'sellers',
    component: SellersTableComponent,
    canActivate: [ StoreFirstGuard, AuthGuard ],
    children: [
      {
        path: 'edit/:id',
        component: SellerEditorComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: 'new',
        component: SellerEditorComponent,
        canActivate: [ AuthGuard ]
      }
    ],
  },
  {
    path: 'orders',
    component: OrdersTableComponent,
    canActivate: [ StoreFirstGuard, AuthGuard ]
  },
  {
      path: 'discounts',
      component: DiscountsTableComponent,
      canActivate: [StoreFirstGuard, AuthGuard],
      children: [
          {
              path: 'edit/:id',
              component: DiscountEditorComponent,
              canActivate: [AuthGuard]
          },
          {
              path: 'new',
              component: DiscountEditorComponent,
              canActivate: [AuthGuard]
          }
      ],
  },
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
