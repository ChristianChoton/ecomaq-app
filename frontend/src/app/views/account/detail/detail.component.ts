import { Component } from "@angular/core";
import { User } from "../../../core/models/user.model";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "account-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent {
  constructor(private _user: UserService) {}

  user: User = {} as User;

  ngOnInit() {
    this._user.user$.subscribe((u) => {
      if (u) this.user = u;
    });
  }
}
