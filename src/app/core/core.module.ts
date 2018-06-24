import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])   
  ],
  declarations: [
    NavbarComponent,
    HomeComponent,
    LoginComponent  
  ],
  exports:[
    NavbarComponent    
  ]
})
export class CoreModule { }
