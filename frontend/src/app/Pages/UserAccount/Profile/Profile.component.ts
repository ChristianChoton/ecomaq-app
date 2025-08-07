
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.scss']
})
export class ProfileComponent implements OnInit {

   constructor(private http: HttpService) { }

   user: User = {} as User;

   ngOnInit() {
    this.http.getMe().subscribe(u => this.user = u);
   }

}
