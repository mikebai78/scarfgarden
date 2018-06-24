import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'shared/service/category.service';
import { Category } from 'shared/model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: Category  
  categories: Category[]
  selectedCategory: Category
  
  public isCollapsed = true;

  constructor(public categoryService: CategoryService) { 
    this.categoryService.getCategories().subscribe(categories => this.categories = categories)
  }

  ngOnInit() {
  }

  onEdit(category:Category){
    this.selectedCategory = category;
    this.isCollapsed = true;
  }   

  deleteCategory(id:string){         
    if(confirm('Are you sure you want to delete this product?')){
      this.categoryService.delete(id);
    }     
             
  }

}
