import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from 'shared/service/order.service';
import { Order } from 'shared/model/order';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit, OnDestroy {
  orders: Order[];
  subscription: Subscription;

  constructor(private orderService:OrderService) { }

  ngOnInit() {
    this.subscription = this.orderService.getOrders().subscribe(orders => this.orders = orders)    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
