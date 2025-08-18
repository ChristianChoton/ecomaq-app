import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-user-profile',
  templateUrl: './header-user-profile.component.html',
  styleUrls: ['./header-user-profile.component.scss']
})
export class HeaderUserProfileComponent {
  constructor(private router: Router) {}

  isLoged(): boolean {
    const token = localStorage.getItem('auth_token');
    if(token){
      return true;
    }

    return false;
  }

  onLogout() {
    localStorage.removeItem('auth_token');
    this.router.navigateByUrl('session/signin');
  }
}
