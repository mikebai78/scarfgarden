import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'shared/service/product.service';
import { Product } from 'shared/model/product';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from 'shared/service/shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCart } from 'shared/model/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[];  
  product: Product;
  categ: string;
  filteredProducts: Product[] = [];
  subscription: Subscription;

  cart: ShoppingCart

  constructor(
    public route: ActivatedRoute,
    public productService: ProductService,
    public cartService: ShoppingCartService   
  ) { 
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      route.queryParamMap.subscribe(params => {
        this.categ = params.get('category');
        return this.filteredProducts = (this.categ)?
        this.products.filter(product => product.category === this.categ) :
        this.products;
       });
    });        
  }

 ngOnInit() {  
   let cart = this.cartService.getCart().valueChanges();  
    this.subscription = cart.subscribe(cart => this.cart = cart);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
}
