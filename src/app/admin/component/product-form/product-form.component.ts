import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'shared/service/category.service';
import { Product } from 'shared/model/product';
import { ProductService } from 'shared/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'shared/model/category';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: any = {};
  
  categories:Category[];     
  id; 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private productService: ProductService
  ) { 
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);    
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.id).subscribe(product => this.product = product);
  }    
 
  ngOnInit() {
  }
  
  updateProduct(product){    
    this.productService.update(this.id, this.product);        
    this.router.navigate(['/admin/myproducts']);     
  } 
}
