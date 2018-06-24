import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/service/auth.service';
import { AppUser } from 'shared/model/app-user';
import { ShoppingCartService } from 'shared/service/shopping-cart.service';
import { ShoppingCart } from 'shared/model/shopping-cart';
import { ShoppingCartItem } from 'shared/model/shopping-cart-item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser: AppUser;    
  items: ShoppingCartItem[]

  constructor(private auth: AuthService, private cartService: ShoppingCartService) {}

  ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);   
    
    this.cartService.getItems().subscribe(items => this.items = items);  

    }   
 
  logout() {
    this.auth.logout();
  }

}
