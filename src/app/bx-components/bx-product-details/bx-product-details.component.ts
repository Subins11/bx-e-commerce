import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, map, of, switchMap } from 'rxjs';
import { BxAddCartService } from 'src/app/bx-core/bx-services/bx-addToCart/bx-add-cart.service';
import { BxLoginServiceService } from 'src/app/bx-core/bx-services/bx-login/bx-login-service.service';
import { ProductListService } from 'src/app/bx-core/bx-services/bx-productList/product-list.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bx-product-details',
  templateUrl: './bx-product-details.component.html',
  styleUrls: ['./bx-product-details.component.scss'],
})
export class BxProductDetailsComponent implements OnInit {
  product$: Observable<any> = of(null);

  isAuthenticated: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productDetail: ProductListService,
    private addCart: BxAddCartService,
    private loginService: BxLoginServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      map((params) => params.get('id')),
      switchMap((productId) => {
        if (productId) {
          return this.productDetail.getProductById(productId);
        } else {
          // Handle the case when 'id' parameter is null
          return of(null); // Return an observable of null
        }
      })
    );
    this.isAuthenticated = this.loginService.isAuthenticatedUser();
  }

//Add to Cart

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
      this.router.navigate(['/login'])
    }
  }
}