import { Component } from "@angular/core";
import { HelperService } from "../../services/helper.service";

@Component({
  selector: "lfixed-header",
  templateUrl: "./fixed-header.component.html",
  styleUrls: ["./fixed-header.component.scss"],
})
export class FixedHeaderComponent {
  constructor(private helper: HelperService) {}

  public toggleSidebar() {
    this.helper.sidenavOpen = !this.helper.sidenavOpen;
  }
}
