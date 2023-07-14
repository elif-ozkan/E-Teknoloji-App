import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers: [CategoryService],
})
export class ProductAddForms2Component {
  constructor(
    private FormBuilder: FormBuilder,
    private categoryService: CategoryService
  ) {}

  productAddForm!: FormGroup;
  product: Product = new Product(); //Datanın producta atanmasını sağlar
  category!: Category[];

  createProductAddForm() {
    this.productAddForm = this.FormBuilder.group({
      name: [' ', Validators.required],
      description: [' ', Validators.required],
      imageUrl: [' ', Validators.required],
      price: [' ', Validators.required],
      categoryId: ['', Validators.required],

      // FormBuilder ile yapılan işlemler Validators ile kontrol edilir.
    });
    // add(){
    // if(this.productAddForm.valid){
    // this.product=Object.assign({},this.productAddForm.value);
  }
  ngOnInıt() {
    this.createProductAddForm(); //Yeni form metod yoluyla eklenir.
    this.categoryService.getCategory().subscribe((data) => {
      this.category = data;
    });
  }
}
// FormBuilder ile formlar için gruplama işlemi yapılır.Group işlemi ile form için gruplama yapılır. Obje notasyonu ile ürün nitelikleri gruplandırılır
//Form datası producta taşınmalıdır.
