import { Optional } from '@angular/core';

export class product {
  _id: string;
  name: string;
  brand: string;
  gender: string;
  category: string;
  size: number[];
  colors: string[];
  itemsLeft: number;
  price: number;
  discountPrice?: Optional;
  is_Avilable: boolean;
  imageUrl: string;
  discount?: number;
  description: string;
}
