import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BxHomepageComponent } from './bx-components/bx-homepage/bx-homepage.component';
import { BxProductDetailsComponent } from './bx-components/bx-product-details/bx-product-details.component';
import { BxCartComponent } from './bx-components/bx-cart/bx-cart.component';
import { BxProfileComponent } from './bx-components/bx-profile/bx-profile.component';
import { BxNavbarComponent } from './bx-widgets/bx-organism/bx-navbar/bx-navbar.component';
import { BxHeaderComponent } from './bx-shared/bx-layouts/bx-header/bx-header.component';
import { BxFooterComponent } from './bx-shared/bx-layouts/bx-footer/bx-footer.component';
import { BxBannerSectionComponent } from './bx-widgets/bx-organism/bx-banner-section/bx-banner-section.component';
import { BxInputComponent } from './bx-widgets/bx-atom/bx-input/bx-input.component';
import { BxButtonComponent } from './bx-widgets/bx-atom/bx-button/bx-button.component';
import { BxSearchComponent } from './bx-widgets/bx-molecule/bx-search/bx-search.component';
import { BxProductListComponent } from './bx-widgets/bx-organism/bx-product-list/bx-product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BxCurrencyPipe } from './bx-core/bx-pipes/bx-currency.pipe';
import { BxRatingPipe } from './bx-core/bx-pipes/bx-rating.pipe';
import { BxTransitionDirective } from './bx-core/bx-directives/bx-transition.directive';
import { BxFooterCardsComponent } from './bx-widgets/bx-organism/bx-footer-cards/bx-footer-cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BxLoginComponent } from './bx-components/bx-login/bx-login.component';
import { BxFilterPipe } from './bx-core/bx-pipes/bx-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BxHomepageComponent,
    BxProductDetailsComponent,
    BxCartComponent,
    BxProfileComponent,
    BxNavbarComponent,
    BxHeaderComponent,
    BxFooterComponent,
    BxBannerSectionComponent,
    BxInputComponent,
    BxButtonComponent,
    BxSearchComponent,
    BxProductListComponent,
    BxCurrencyPipe,
    BxRatingPipe,
    BxTransitionDirective,
    BxFooterCardsComponent,
    BxLoginComponent,
    BxFilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
