import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from 'shared/model/shopping-cart';
import { ShoppingCartService } from 'shared/service/shopping-cart.service';
import { ShoppingCartItem } from 'shared/model/shopping-cart-item';

@Component({
  selector: 'app-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent {
  @Input('cart') cart: ShoppingCart
  items: ShoppingCartItem[]

  constructor(private cartService: ShoppingCartService) {
    this.cartService.getItems().subscribe(items => this.items = items)
  }
  itemCount() {
    let itemCount: number = 0;
    this.items.forEach(item =>
      itemCount += item.quantity
    );
    return itemCount;
  }

  sumPrice() {
    let sum: number = 0;
    this.items.forEach(item =>
      sum += item.quantity * item.price
    );
    return sum;
  }
}
