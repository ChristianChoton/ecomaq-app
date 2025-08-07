import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineryDetailComponent } from './machinery-detail/machinery-detail.component';
import { MachineryListComponent } from './machinery-list/machinery-list.component';
import { RouterModule } from '@angular/router';
import { MachineryRoutes } from './machinery.routing';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    MachineryDetailComponent,
    MachineryListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    DataViewModule,
    ButtonModule,
    TagModule,
    RouterModule.forChild(MachineryRoutes),
  ]
})
export class MachineryModule { }
