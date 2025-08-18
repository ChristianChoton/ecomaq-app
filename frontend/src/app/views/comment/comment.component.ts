import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../../shared/shared.module';
import { HttpService } from '../../services/http.service';
import { UserService } from '../../services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentCreate } from '../../core/models/comment-create.model';
import { Router } from '@angular/router';
import { RatingModule } from 'primeng/rating';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule,FlexLayoutModule, MatCardModule, MatButtonModule, MatInputModule, SharedModule, FormsModule, ReactiveFormsModule, RatingModule]
})
export class CommentComponent {
  constructor(private http: HttpService, private _user: UserService, private router: Router) {}

  detail: string = "";
  rating: number = 0;

  sendComment() {
    const comment: CommentCreate = {
      detail: this.detail,
      user: this._user.getUser()?.id!,
      rating: this.rating
    }

    this.http.createComment(comment).subscribe({
      next: (r) => console.log(r),
      error: (e) => console.log(e),
      complete: () => this.router.navigateByUrl('home')
    })
  }
}
