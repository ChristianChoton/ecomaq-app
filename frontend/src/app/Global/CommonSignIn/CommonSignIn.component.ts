import { Component, EventEmitter, Output } from '@angular/core';
import { Auth } from '../../core/models/auth.model';


@Component({
  selector: 'embryo-SignIn',
  templateUrl: './CommonSignIn.component.html',
  styleUrls: ['./CommonSignIn.component.scss']
})
export class CommonSignInComponent {

  constructor() { }

  auth: Auth = new Auth;
  @Output() loginEvent: EventEmitter<Auth> = new EventEmitter();
  onLogin = () => this.loginEvent.emit(this.auth);

}
