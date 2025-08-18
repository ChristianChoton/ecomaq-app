import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DetailComponent } from './detail/detail.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { AccountRoutes } from './account.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    ProfileComponent,
    EditProfileComponent,
    DetailComponent,
    OrderHistoryComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    MatDatepickerModule,
    MatRadioModule,
    MatListModule,
    MatCheckboxModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatNativeDateModule,
    RouterModule.forChild(AccountRoutes),    
  ]
})
export class AccountModule { }
