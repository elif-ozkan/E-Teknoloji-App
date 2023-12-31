import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product/product';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: Product[], filterText?: string): Product[] {
    return filterText
      ? value.filter((p: Product) => p.name.toLocaleLowerCase())
      : value;
  }
}
