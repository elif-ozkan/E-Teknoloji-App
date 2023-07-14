import { Component } from '@angular/core';
import { Product } from '../product';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/category/category';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers: [CategoryService, ProductService], //Lokal component olmasını sağlar.
})
export class ProductAddForms1Component {
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {} //CategoryService ile import edilmesini sağlar.

  model: Product = new Product(); //Boş product nesnesi oluşur.

  categories!: Category[]; //Categoriye göre sıralamayı sağlar.Kategori listesi şeklinde gelmesini sağlar.
  ngOnInit() {
    this.categoryService.getCategory().subscribe((data) => {
      this.categories = data;
    });
  }
  add(form: NgForm) {
    //Ekleme için formla fonksiyonu tanımlanır.
    this.productService.addProuduct(this.model).subscribe((data) => {}); //Formdan değer almaya yarar. ve bu alınan değerin dönmesi sağlanır.ürünün isim değeri döner
  }
}
