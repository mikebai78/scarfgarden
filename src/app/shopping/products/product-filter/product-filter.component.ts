import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'shared/model/category';
import { CategoryService } from 'shared/service/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories: Category[];
  @Input() categ:string;

  constructor(public categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);      
   }

  ngOnInit() {
  }


}
