import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BxAddCartService {

  constructor() { }

  // Load cart items from local storage when the service is instantiated
  
  cartItems: any[] = JSON.parse(localStorage.getItem('cartItems') || '[]');

  addToCart(item: any) {
    this.cartItems.push(item);
    this.saveCartItems();
  }

  getCartItems() {
    return this.cartItems;
  }

  private saveCartItems() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  getCartItemsFromStorage(): any[] {
    const cartItemsString = localStorage.getItem('cartItems');
    return cartItemsString ? JSON.parse(cartItemsString) : [];
  }

  saveCartItemsToStorage(cartItems: any[]): void {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
}
