import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'shared/model/order';
import { OrderService } from 'shared/service/order.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-order-detail',
  templateUrl: './admin-order-detail.component.html',
  styleUrls: ['./admin-order-detail.component.css']
})
export class AdminOrderDetailComponent implements OnInit {   
  
  order

  constructor(private orderService:OrderService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getOrder();
  }

  getOrder(){
    const id = this.route.snapshot.paramMap.get('id')
    this.orderService.getOrder(id).subscribe(order => this.order = order)    
    return this.order
  }

  goBack():void{
    this.location.back();
  }

}
