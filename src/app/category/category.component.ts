import { Component } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  constructor(private categoryService: CategoryService) {}
  category: any = { name: '' }; //Kategori adında özellik tanımladık.
  title = 'Kategori Listesi';
  categories!: Category[];

  ngOnInit() {
    this.categoryService.getCategory().subscribe((data) => {
      this.categories = data;
    });
  }
}
