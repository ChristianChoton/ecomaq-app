import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment/comment.component';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { RatingModule } from 'primeng/rating';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    RatingModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
