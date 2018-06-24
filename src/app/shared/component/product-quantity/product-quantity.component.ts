import { Component,Input, OnInit } from '@angular/core';
import { Product } from 'shared/model/product';
import { ShoppingCartService } from 'shared/service/shopping-cart.service';
import { ShoppingCart } from 'shared/model/shopping-cart';
import { ShoppingCartItem } from 'shared/model/shopping-cart-item';



@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent{
  @Input('product') product: Product;    
  @Input('shopping-cart') shoppingCart: ShoppingCart;  

  constructor(private cartService: ShoppingCartService) {    
   }   

  getQuantity(id){
    if(!this.shoppingCart) return 0;
    let item = this.shoppingCart.items[id];    
    return item? item.quantity : 0;       
  }

  addQuantity(id){
    let newQuantity = this.getQuantity(id) + 1;
    this.cartService.updateQuantity(id, newQuantity);        
  }

  reduceQuantity(id){
    let newQuantity = this.getQuantity(id) - 1;    
    this.cartService.updateQuantity(id, newQuantity);                  
  }  
}
