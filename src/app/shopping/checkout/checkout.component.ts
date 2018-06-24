import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from 'shared/service/shopping-cart.service';
import { ShoppingCart } from 'shared/model/shopping-cart';
import { Subscription } from 'rxjs';
import { OrderService } from 'shared/service/order.service';
import { AuthService } from 'shared/service/auth.service';
import { map } from 'rxjs/operators';
import { Order } from 'shared/model/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  cart:ShoppingCart
  cartSubscription: Subscription
  userSubscription: Subscription
  userId: string

  shipping = {
    name:  '',
    addressLine1: '',
    addressLine2: '',
    city: ''
  };    

  constructor(
    private router:Router,
    private authService:AuthService, 
    private cartService:ShoppingCartService, 
    private orderService:OrderService) { }

  ngOnInit() {

    this.userSubscription = this.authService.user$.subscribe(user=>this.userId = user.uid)
    this.cartSubscription = this.cartService.getCart().valueChanges().subscribe(cart=> this.cart = cart)
  }

  placeOrder() {
    let order:Order = {
      userId: this.userId,
      orderAt: new Date().getTime(),
      shipping: this.shipping,
      items : this.cart.items      
    }    
    let result = this.orderService.storeOrder(order);    
    this.router.navigate(['/ordersuccess']);
  } 

  ngOnDestroy(){
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

}
