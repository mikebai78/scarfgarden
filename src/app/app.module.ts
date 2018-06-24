import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';
import { environment } from '../environments/environment';
import { SharedModule } from 'shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { AdminAuthGuardService } from './admin/service/admin-auth-guard.service';
import { ShoppingModule } from './shopping/shopping.module';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './shopping/products/products.component';
import { LoginComponent } from './core/component/login/login.component';
import { HomeComponent } from './core/component/home/home.component';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'login', component: LoginComponent },  
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent             
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,    
    RouterModule.forRoot(routes),    
    AngularFireModule.initializeApp(environment.firebase)    
  ],
  providers: [
    AdminAuthGuardService   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
