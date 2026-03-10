import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  searchtext: string = '';

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;

  setserchtext(value: any) {
    this.searchtext = value;
  }
}
