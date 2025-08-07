import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { PaymentRoutes } from './payment.routing';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    SigninComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatExpansionModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    RouterModule.forChild(PaymentRoutes),
  ]
})
export class PaymentModule { }
