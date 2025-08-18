import { Component, OnInit } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { ToastaService, ToastOptions } from "ngx-toasta";
import { User } from "../../../core/models/user.model";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from "../../../services/http.service";
import { userToResponse } from "../../../core/mappers/user.mapper";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "account-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.scss"],
})
export class EditProfileComponent implements OnInit {
  type: string;
  info: UntypedFormGroup;

  emailPattern: any = /\S+@\S+\.\S+/;
  toastOption: ToastOptions = {
    title: "Información de cuenta",
    msg: "Se ha actualizado tu información exitosamente!",
    showClose: true,
    timeout: 3000,
    theme: "material",
  };

  user: User = {} as User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formGroup: UntypedFormBuilder,
    private toastyService: ToastaService,
    private http: HttpService,
    private _user: UserService
  ) {
    this.route.params.subscribe((params) => {
      this.route.queryParams.forEach((queryParams) => {
        this.type = queryParams["type"];
      });
    });
  }

  ngOnInit() {
    this.info = this.formGroup.group({
      first_name: [this.user.firstName, [Validators.required]],
      last_name: [this.user.lastName, [Validators.required]],
      gender: [this.user.gender],
      date: [this.user.birthDate],
      phone_number: [this.user.mobile, [Validators.required]],
      email: [
        this.user.email,
        [Validators.required, Validators.pattern(this.emailPattern)],
      ],
    });

    this._user.user$.subscribe((u) => {
      if (u) this.user = u;
      this.info.patchValue({
        first_name: this.user.firstName,
        last_name: this.user.lastName,
        gender: this.user.gender,
        date: new Date(this.user.birthDate),
        phone_number: this.user.mobile,
        email: this.user.email,
      });
    });
  }

  submitProfileInfo() {
    if (this.info.valid) {
      this.user.firstName = this.info.get("first_name")?.value;
      this.user.lastName = this.info.get("last_name")?.value;
      this.user.gender = this.info.get("gender")?.value;
      this.user.birthDate = this.info.get("date")?.value;
      this.user.mobile = this.info.get("phone_number")?.value;
      this.user.email = this.info.get("email")?.value;

      const body = userToResponse(this.user);

      let data;
      this.http.updateMe(body).subscribe({
        next: (r) => data = r,
        error: (e) => console.log(e),
        complete: () => {
          this._user.setUser(data);
          this.router.navigate(["/account/profile"]).then(() => {
            this.toastyService.success(this.toastOption);
          });
        },
      });
    } else {
      for (let i in this.info.controls) {
        this.info.controls[i].markAsTouched();
      }
    }
  }
}
