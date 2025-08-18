import { Component, OnInit } from "@angular/core";
import { User } from "../../../core/models/user.model";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "account-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  constructor(private _user: UserService) {}

  user: User = {} as User;

  ngOnInit() {
    this._user.user$.subscribe((u) => {
      if (u) this.user = u;
    });
  }
}
