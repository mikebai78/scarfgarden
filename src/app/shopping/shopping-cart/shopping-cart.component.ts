import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'shared/service/shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'shared/model/shopping-cart';
import { ShoppingCartItem } from 'shared/model/shopping-cart-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {  
  items: ShoppingCartItem[]   
   

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {    
    this.cartService.getItems().subscribe(items => this.items = items)      
  }

  clearCart(){
    this.cartService.deleteAll();
  }

  deleteItem(key){
    this.cartService.deleteItem(key);
  }

  itemCount(){
    let itemCount: number = 0;
    this.items.map(item =>      
      itemCount += item.quantity
    );  
    return itemCount; 
  }

  sumPrice(){
    let sum: number = 0;
    this.items.map(item =>      
      sum += item.quantity * item.price
    );  
    return sum;  
  }
}
