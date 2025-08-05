import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { GlobalModule } from '../../Global/Global.module';
import { RouterModule } from '@angular/router';
import { ProductsRoutes } from './products.routing';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent    
  ],
  imports: [
    CommonModule,
    GlobalModule,
    RouterModule,
    SharedModule,
    DataViewModule,
    ButtonModule,
    TagModule,
    MatButtonModule,
    RouterModule.forChild(ProductsRoutes),
  ]
})
export class ProductsModule { }
