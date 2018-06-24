import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'shared/model/product';
import { ShoppingCartService } from 'shared/service/shopping-cart.service';
import { ShoppingCart } from 'shared/model/shopping-cart';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product;
  @Input('shopping-cart') shoppingCart: ShoppingCart;
  @Input('show-actions') showActions = true;      

  constructor(private cartService: ShoppingCartService) {       
   }    

  addToCart(id) {
    this.cartService.addItemToCart(id,this.product);
  }

  isInCart(id){
    if(!this.shoppingCart) return false;
    let item = this.shoppingCart.items[id]  
    return item? true: false;
  }  
}
