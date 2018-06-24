import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'shared/service/category.service';
import { Category } from 'shared/model/category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  @Input() category: Category   
  

  constructor(public categoryService: CategoryService) {         
  }

  ngOnInit() {
  }
   
  updateCategory(category){    
    this.categoryService.update(category.id,category);
  }  

}
