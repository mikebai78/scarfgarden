import { NgModule } from '@angular/core';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './products/products.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ItemQuantityComponent } from './item-quantity/item-quantity.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyOrderDetailComponent } from './my-order-detail/my-order-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'shared/service/auth-guard.service';
import { SharedModule } from 'shared/shared.module';

const routes: Routes = [
{ path: 'shoppingcart', component: ShoppingCartComponent },
{ path: 'checkout', component: CheckoutComponent, canActivate:[AuthGuardService] },
{ path: 'ordersuccess/:id', component: OrderSuccessComponent, canActivate:[AuthGuardService]  },
{ path: 'myorders', component: MyOrdersComponent, canActivate:[AuthGuardService]  },
{ path: 'myorders/:id', component: MyOrderDetailComponent, canActivate:[AuthGuardService]  }
]

@NgModule({
  imports: [    
    SharedModule,    
    RouterModule.forChild(routes)    
  ],
  declarations: [
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,   
    ProductsComponent,    
    ProductFilterComponent,    
    ItemQuantityComponent,
    ShoppingCartSummaryComponent,    
    MyOrdersComponent,
    MyOrderDetailComponent    
  ]
})
export class ShoppingModule { }
