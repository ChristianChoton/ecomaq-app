import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductsRoutes } from './products.routing';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatButtonModule,
    RouterModule.forChild(ProductsRoutes),
  ]
})
export class ProductsModule { }
