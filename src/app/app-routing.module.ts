import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BxHomepageComponent } from './bx-components/bx-homepage/bx-homepage.component';
import { BxCartComponent } from './bx-components/bx-cart/bx-cart.component';
import { BxLoginComponent } from './bx-components/bx-login/bx-login.component';
import { BxProfileComponent } from './bx-components/bx-profile/bx-profile.component';
import { BxProductDetailsComponent } from './bx-components/bx-product-details/bx-product-details.component';


const routes: Routes = [
  { path: "", component: BxHomepageComponent },
  { path: "home", component: BxHomepageComponent },
  { path: "cart", component: BxCartComponent },
  { path: "login", component: BxLoginComponent },
  { path: "profile", component: BxProfileComponent },
  { path: "product/:id", component: BxProductDetailsComponent }, // Changed to "productDetails"
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
