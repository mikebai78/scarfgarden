import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'shared/component/product-card/product-card.component';
import { ProductQuantityComponent } from 'shared/component/product-quantity/product-quantity.component';
import { ProductService } from './service/product.service';
import { AuthService } from 'shared/service/auth.service';
import { AuthGuardService } from 'shared/service/auth-guard.service';
import { UserService } from './service/user.service';
import { CategoryService } from 'shared/service/category.service';
import { ShoppingCartService } from 'shared/service/shopping-cart.service';
import { OrderService } from './service/order.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    CustomFormsModule,
    NgbModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule         
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent
  ],
  exports: [
    CommonModule,
    FormsModule,    
    CustomFormsModule, 
    ProductCardComponent,
    ProductQuantityComponent,
    NgbModule.forRoot().ngModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule   
  ],
  providers: [
    ProductService,
    AuthService,
    AuthGuardService,
    UserService,
    CategoryService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
