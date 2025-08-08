import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineryDetailComponent } from './machinery-detail/machinery-detail.component';
import { MachineryListComponent } from './machinery-list/machinery-list.component';
import { RouterModule } from '@angular/router';
import { MachineryRoutes } from './machinery.routing';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MachineryDetailComponent,
    MachineryListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatButtonModule,
    RouterModule.forChild(MachineryRoutes),
  ]
})
export class MachineryModule { }
