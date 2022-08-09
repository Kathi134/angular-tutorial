import { Injectable } from '@angular/core';
import { Product } from './fooproducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = [];

  read() : Product[] {
    return this.cartItems;
  }

  update(item: Product) : void {
    this.cartItems.push(item);
  }

  delete() : Product[] {
    this.cartItems = [];
    return this.cartItems;
  }

  constructor() { }
}
