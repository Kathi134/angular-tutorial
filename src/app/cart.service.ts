import { Injectable } from '@angular/core';
import { Product } from './fooproducts';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = [];

  constructor(
    private xhr: HttpClient
  ) { }

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

  getShippingPrices() {
    return this.xhr.get<{type: string, price: number}[]>
      ('/assets/shipping.json');
  }
}
