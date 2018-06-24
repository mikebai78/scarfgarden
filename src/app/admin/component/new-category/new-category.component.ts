import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'shared/model/category';
import { CategoryService } from 'shared/service/category.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  category: Category = {
    name: '',
    width: null,
    length: null
  }  

  constructor(public categoryService: CategoryService) { }

  ngOnInit() {
  }

  createCategory(){          
    this.categoryService.create(this.category);
    this.category = {
      name: '',
      width: null,
      length: null
    };         
  }
}
