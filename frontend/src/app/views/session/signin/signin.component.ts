import { Component } from "@angular/core";
import { HttpService } from "../../../services/http.service";
import { Auth } from "../../../core/models/auth.model";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent {
  constructor(
    private http: HttpService,
    private _user: UserService
  ) {}

  handleLogin(auth: Auth) {
    let data: any;
    this.http.authLogin(auth).subscribe({
      next: (r) => (data = r),
      error: (e) => console.log(e),
      complete: () => {
        localStorage.setItem("auth_token", data.token);
        this._user.findUser("/home")
      }
    });
  }
}
