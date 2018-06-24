import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ShoppingCartService } from './shopping-cart.service';
import { shiftInitState } from '@angular/core/src/view';
import { Order } from 'shared/model/order';

@Injectable()
export class OrderService {
  order: Order
  ordersRef: AngularFireList<any>

  constructor(private db:AngularFireDatabase, private cartService:ShoppingCartService) { 
    this.ordersRef = db.list('/orders');
  }

  async storeOrder(order:Order){
    let result = await this.ordersRef.push(order);
    this.cartService.deleteAll();
    return result;
  }

  getOrders(){
    return this.ordersRef.snapshotChanges().map(actions =>{
      return actions.map(c=>{
        const id = c.payload.key
        const data = c.payload.val() as Order
        return {id,...data}
      })
    }) 
  }       

  getUserOrders(uid){
    return this.ordersRef.snapshotChanges().map(actions =>{
      return actions.map(c=>{
        const id = c.payload.key
        const data = c.payload.val() as Order
        return {id,...data}
      }).filter(order=> order.userId = uid)
    })
  }   

  getOrder(id){
    let orderRef = this.db.object('/orders/'+id)
    return orderRef.valueChanges();
  }
 
}

