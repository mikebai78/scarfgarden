import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'shared/service/product.service';
import { Observable } from '@firebase/util';
import { Product } from 'shared/model/product'
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})

export class AdminProductsComponent implements OnInit, OnDestroy {

  products: Product[];  
  filteredProducts: Product[];
  subscription: Subscription;


  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.subscription = this.productService.getProducts().subscribe(products =>this.filteredProducts = this.products = products);           
  }   
 
  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
  deleteProduct(id){
    if(confirm('Are you sure you want to delete this product?')){
      this.productService.delete(id);
    }    
  }

  filter(query:string){
    this.filteredProducts = (query)?
     this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())): 
     this.products;
  } 

}
