import { Component, Input } from '@angular/core';
import { product } from 'src/app/Models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  @Input()
  products: product;
}
