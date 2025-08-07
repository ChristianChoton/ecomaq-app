import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Auth } from "../../core/models/auth.model";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";

@Component({
  selector: "sigin",
  templateUrl: "./sigin.component.html",
  styleUrls: ["./sigin.component.scss"],
})
export class SiginComponent {
  constructor() {}

 
  auth: Auth = new Auth();
  @Output() loginEvent: EventEmitter<Auth> = new EventEmitter();
  onLogin = () => this.loginEvent.emit(this.auth);
}
