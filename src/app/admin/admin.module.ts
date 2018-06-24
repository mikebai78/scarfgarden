import { NgModule } from '@angular/core';
import { AdminOrdersComponent } from './component/admin-orders/admin-orders.component';
import { AdminOrderDetailComponent } from './component/admin-order-detail/admin-order-detail.component';
import { AdminProductsComponent } from './component/admin-products/admin-products.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { NewProductComponent } from './component/new-product/new-product.component';
import { CategoryComponent } from './component/category/category.component';
import { NewCategoryComponent } from './component/new-category/new-category.component';
import { EditCategoryComponent } from './component/edit-category/edit-category.component';
import { AdminAuthGuardService } from './service/admin-auth-guard.service';
import { SharedModule } from 'shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/service/auth-guard.service';

const routes: Routes = [  
  { path: 'admin/adminorders', component: AdminOrdersComponent, canActivate:[AuthGuardService, AdminAuthGuardService]  },
  { path: 'admin/adminorders/:id', component: AdminOrderDetailComponent, canActivate:[AuthGuardService, AdminAuthGuardService]  },
  { path: 'admin/adminproducts/:id', component: ProductFormComponent, canActivate:[AuthGuardService, AdminAuthGuardService]  }, 
  { path: 'admin/newproduct', component: NewProductComponent, canActivate:[AuthGuardService, AdminAuthGuardService]  },
  { path: 'admin/adminproducts', component: AdminProductsComponent, canActivate:[AuthGuardService, AdminAuthGuardService]  },
  { path: 'admin/category', component: CategoryComponent, canActivate:[AuthGuardService, AdminAuthGuardService]  },
];


@NgModule({
  imports: [    
    SharedModule,    
    RouterModule.forChild(routes)
  ],
  declarations: [
    AdminOrdersComponent,
    AdminOrderDetailComponent,
    AdminProductsComponent,   
    ProductFormComponent,
    NewProductComponent, 
    CategoryComponent,
    NewCategoryComponent,
    EditCategoryComponent,
  ],     
  providers:[
    AdminAuthGuardService
  ]
})
export class AdminModule { }
