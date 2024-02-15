import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BxAddCartService } from 'src/app/bx-core/bx-services/bx-addToCart/bx-add-cart.service';
import { BxLoginServiceService } from 'src/app/bx-core/bx-services/bx-login/bx-login-service.service';
import { ProductListService } from 'src/app/bx-core/bx-services/bx-productList/product-list.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bx-product-list',
  templateUrl: './bx-product-list.component.html',
  styleUrls: ['./bx-product-list.component.scss'],
})
export class BxProductListComponent implements OnInit {
  @Input() product: any;

  productList: any[] = [];
  selectedCategory: string = 'all';
  isAuthenticated: boolean = false;

  constructor(
    private products: ProductListService,
    private cdr: ChangeDetectorRef,
    private addCart: BxAddCartService,
    private router: Router,
    private loginService: BxLoginServiceService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.isAuthenticated = this.loginService.isAuthenticatedUser();
  }

  loadProducts(): void {
    this.products.getProducts().subscribe((data: any[]) => {
      this.productList = Object.values(data);
      this.filterProducts();
      this.cdr.detectChanges();
    });
  }

  // Filter products based on the selected category

  filterProducts(): void {
    if (this.selectedCategory !== 'all') {
      this.productList = this.productList.filter(
        (product) => product.category === this.selectedCategory
      );
    }
  }

  onCategoryChange(event: any): void {
    this.selectedCategory = event.target.value;
    this.loadProducts();
  }

  //Add to cart

  addToCart(item: any) {
    if (this.isAuthenticated) {
      this.addCart.addToCart(item);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Item Added to Cart",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Please Login",
        text: "..........",
      });
      this.router.navigate(['/login']);
    }
  }
  

  // Navigate to product details page with productId as route parameter

  navigateToProductDetails(productId: string): void {
    this.router.navigate(['/product', productId]);
  }
}
