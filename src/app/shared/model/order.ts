import { ShoppingCart } from "./shopping-cart";
import { ShoppingCartItem } from "./shopping-cart-item";

export class Order {   
   
   constructor(
     public userId: string, 
     public orderAt: number,
     public shipping: any, 
     public items: ShoppingCartItem[] ){  
   }
}