import { Component, OnInit, signal } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { Comment } from '../../../core/models/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  constructor(private http: HttpService) {}

  layout: string = 'grid';
  options = ['list', 'grid'];  

  comments: Comment[] = [];
  
  ngOnInit(): void {
    this.http.getComments().subscribe(r => this.comments = r);
  }
}
