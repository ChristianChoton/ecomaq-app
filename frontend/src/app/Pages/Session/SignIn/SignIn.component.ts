import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { Auth } from '../../../core/models/auth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'signIn',
  templateUrl: './SignIn.component.html',
  styleUrls: ['./SignIn.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
  }

  handleLogin(auth: Auth) {
      let data;
      this.http.authLogin(auth).subscribe({
         next: r => data = r,
         error: e => console.log(e),
         complete: () => {
            localStorage.setItem('auth_token', data.token);
            this.router.navigateByUrl('/home');
         }
      })
   } 

}
