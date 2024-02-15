import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BxAddCartService } from 'src/app/bx-core/bx-services/bx-addToCart/bx-add-cart.service';
import { BxLoginServiceService } from 'src/app/bx-core/bx-services/bx-login/bx-login-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bx-cart',
  templateUrl: './bx-cart.component.html',
  styleUrls: ['./bx-cart.component.scss']
})
export class BxCartComponent implements OnInit {

  cartItems: any[] = [];
  isAuthenticated: boolean = false;

  constructor (
    private addCart: BxAddCartService,
    private router: Router,
    private loginService: BxLoginServiceService
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = this.loginService.isAuthenticatedUser();
    this.loadCartItems();
  }

//Load Cart

  loadCartItems(): void {
    this.cartItems = this.addCart.getCartItemsFromStorage();
  }

  //Total Items

  getTotalItems(): number {
    return this.cartItems.length;
  }

//Total Price

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

   // Remove the item from the cart locally

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
    this.addCart.saveCartItemsToStorage(this.cartItems);
    Swal.fire({
      position: "top-end",
      icon: "warning",
      title: "Removed",
      showConfirmButton: false,
      timer: 1500
    });
  }
}
