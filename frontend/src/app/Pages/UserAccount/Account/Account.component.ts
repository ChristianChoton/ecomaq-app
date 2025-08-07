import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../../services/http.service";
import { User } from "../../../core/models/user.model";

@Component({
  selector: "app-Account",
  templateUrl: "./Account.component.html",
  styleUrls: ["./Account.component.scss"],
})
export class AccountComponent implements OnInit {
  constructor(private http: HttpService) {}

  user: User = {} as User;

  ngOnInit() {
    this.http.getMe().subscribe((u) => (this.user = u));
  }
}
