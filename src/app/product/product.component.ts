import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';

declare let alertify: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  filterText = 'l';
  products!: Product[];
  path = 'http://localhost:3000/products';

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCahrt(product: { name: string }) {
    alert('Sepete Eklendi' + ' ' + product.name);
  }
}
