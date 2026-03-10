import { Component, Input } from '@angular/core';
import { product } from 'src/app/Models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent {
  product: product;
  @Input() productListComp: ProductListComponent = undefined;

  ngOnInit() {
    this.product = this.productListComp.selectProduct;
  }
}
