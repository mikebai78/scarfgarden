import { Component,Input, OnInit } from '@angular/core';
import { Product } from 'shared/model/product';
import { ShoppingCartService } from 'shared/service/shopping-cart.service';
import { ShoppingCart } from 'shared/model/shopping-cart';
import { ShoppingCartItem } from 'shared/model/shopping-cart-item';


@Component({
  selector: 'app-item-quantity',
  templateUrl: './item-quantity.component.html',
  styleUrls: ['./item-quantity.component.css']
})
export class ItemQuantityComponent{
  @Input('item') item: ShoppingCartItem;    
  @Input('shopping-cart') shoppingCart: ShoppingCart;  

  constructor(private cartService: ShoppingCartService) {    
   }   
 
  addQuantity(id){
    let newQuantity = this.item.quantity + 1;
    this.cartService.updateQuantity(id, newQuantity);        
  }

  reduceQuantity(id){
    let newQuantity = this.item.quantity - 1;    
    this.cartService.updateQuantity(id, newQuantity);                  
  }  
}

