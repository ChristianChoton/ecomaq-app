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
    private http: HttpService
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

    let data;
    this.http.getMe().subscribe({
      next: (u) => (data = u),
      error: (e) => console.log(e),
      complete: () => {
        this.user = data;

        this.info.patchValue({
          first_name: this.user.firstName,
          last_name: this.user.lastName,
          gender: this.user.gender,
          date: new Date(this.user.birthDate),
          phone_number: this.user.mobile,
          email: this.user.email,
        });
      },
    });
  }

  submitProfileInfo() {
    if (this.info.valid) {
      const body = userToResponse(this.user);
      this.http.updateMe(body).subscribe({
        next: (data) => console.log(data),
        error: (e) => console.log(e),
        complete: () => {
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
