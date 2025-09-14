import { Component } from "@angular/core";
import { HttpService } from "../../../services/http.service";
import { UserCreate } from "../../../core/models/user-create.model";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  constructor(private http: HttpService, private _user: UserService) {}

  user: UserCreate = {} as UserCreate;

  ngOnInit() {}

  onCreate() {
    let data: any;
    this.http.createUser(this.user).subscribe({
      next: (r) => (data = r),
      error: (e) => console.log(e),
      complete: () => {
        localStorage.setItem("auth_token", data.token);
        this._user.findUser("/home");
      },
    });
  }
}
