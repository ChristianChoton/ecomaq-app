import { NgModule } from "@angular/core";

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from "./home.component";
import { ProductCardComponent } from "./product-card/product-card.component";
import { SharedModule } from "../../shared/shared.module";
import { PageSliderComponent } from './page-slider/page-slider.component';
import { MatButtonModule } from "@angular/material/button";



@NgModule({
    imports: [
        SharedModule,
        SlickCarouselModule,
        MatTabsModule,
        RouterModule,
        CommonModule,
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule
    ],
    declarations: [   
        HomeComponent,
        ProductCardComponent,
        PageSliderComponent
  ],
    exports: [
       
    ]
})
export class HomeModule {}