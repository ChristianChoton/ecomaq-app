import { Component } from "@angular/core";
import { HttpService } from "../../../services/http.service";
import { User } from "../../../core/models/user.model";

@Component({
  selector: "account-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent {
  constructor(private http: HttpService) {}

  user: User = {} as User;

  ngOnInit() {
    this.http.getMe().subscribe((u) => (this.user = u));
  }
}
