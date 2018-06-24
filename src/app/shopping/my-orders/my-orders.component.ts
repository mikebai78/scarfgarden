import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from 'shared/service/order.service';
import { Subscription } from 'rxjs';
import { Order } from 'shared/model/order';
import { AuthService } from 'shared/service/auth.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit, OnDestroy {
  orders: Order[];
  subscription: Subscription;

  constructor(private orderService: OrderService, private authService: AuthService) {    
   }

  ngOnInit() {    
    this.subscription = this.authService.user$.switchMap(u => this.orderService.getUserOrders(u.uid)).subscribe(orders => this.orders = orders);  
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
