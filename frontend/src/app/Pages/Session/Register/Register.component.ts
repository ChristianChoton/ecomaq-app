import { Component, OnInit } from '@angular/core';
import { UserCreate } from '../../../core/models/user-create.model';
import { HttpService } from '../../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'embryo-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpService, private router: Router) { }

  user: UserCreate = {} as UserCreate;

  ngOnInit() {
  }

  onCreate() {
    let data;
    this.http.createUser(this.user).subscribe({
      next: r => data = r,
      error: e => console.log(e),
      complete: () => {
        localStorage.setItem('auth_token', data.token);
        this.router.navigateByUrl('/home');
      }
    })
  }

}
