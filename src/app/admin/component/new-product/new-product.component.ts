import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'shared/service/category.service';
import { Product } from 'shared/model/product';
import { ProductService } from 'shared/service/product.service';
import { Router } from '@angular/router';
import { Category } from 'shared/model/category';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  product:Product = {
    id: '',    
    title: '',
    price: null,
    category:  '',
    imageUrl:  ''
  }
  categories:Category[];       

  constructor(
    private router: Router,    
    private categoryService: CategoryService, 
    private productService: ProductService
  ) { 
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);      
  }    
 
  ngOnInit() {
  }
  
  save(){          
    this.productService.create(this.product);  
    this.router.navigate(['/admin/adminproducts']);     
  } 

}
