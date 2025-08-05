import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { RouterModule } from '@angular/router';
import { HeaderCartComponent } from './header-cart/header-cart.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { WishListComponent } from './wish-list/wish-list.component';
import { HeaderUserProfileComponent } from './header-user-profile/header-user-profile.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { GridComponent } from './grid/grid.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { GlobalModule } from '../Global/Global.module';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TitlePageComponent } from './title-page/title-page.component';
import { RatingComponent } from './rating/rating.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { FeaturesComponent } from './features/features.component';
import { DealOfDayComponent } from './deal-of-day/deal-of-day.component';
import { TimerCountComponent } from './timer-count/timer-count.component';


@NgModule({
  declarations: [
    LogoComponent,    
    WishListComponent,
    HeaderCartComponent,
    HeaderUserProfileComponent,
    ShopDetailsComponent,
    GridComponent,
    ProductGridComponent,
    TitlePageComponent,
    RatingComponent,
    AddToCartComponent,
    FeaturesComponent,
    DealOfDayComponent,
    TimerCountComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    GlobalModule,
    BarRatingModule
  ],
  exports: [
    LogoComponent,
    WishListComponent,
    HeaderCartComponent,
    HeaderUserProfileComponent,
    ShopDetailsComponent,
    GridComponent,
    ProductGridComponent,
    TitlePageComponent,
    RatingComponent,
    AddToCartComponent,
    FeaturesComponent,
    DealOfDayComponent,
    TimerCountComponent
  ]
})
export class SharedModule { }
