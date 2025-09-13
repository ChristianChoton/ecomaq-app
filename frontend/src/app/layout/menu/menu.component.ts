import { Component, Input } from "@angular/core";
import { MenuItems } from "../../core/constants/menu-items";
import { Router } from "@angular/router";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { UserService } from "../../services/user.service";

@Component({
  selector: "lmenu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
  animations: [
    trigger("indicatorRotate", [
      state("collapsed", style({ transform: "rotate(0deg)" })),
      state("expanded", style({ transform: "rotate(180deg)" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4,0.0,0.2,1)")
      ),
    ]),
  ],
})
export class MenuComponent {
  expanded: boolean = false;

  constructor(public menuItems: MenuItems, public router: Router, private _user: UserService) {}

  public onItemSelected(item: any) {
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }

  canShowOption(state: string): boolean {
    if (state === "pages") {
      const token = localStorage.getItem("auth_token");
      return token ? false : true;
    }

    if (state === "admin") {
      return this._user.getUser()?.isAdmin ? true : false;
    }

    return true;
  }

  public redirectTo(subchildState: any) {
    this.router.navigate([subchildState.state], {
      queryParams: { category: subchildState.id },
    });
  }
}
