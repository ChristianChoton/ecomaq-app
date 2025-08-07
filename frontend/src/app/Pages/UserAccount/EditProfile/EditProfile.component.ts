import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import {
  FormControl,
  UntypedFormGroup,
  UntypedFormBuilder,
  FormArray,
  Validators,
} from "@angular/forms";
import {
  ToastaService,
  ToastaConfig,
  ToastOptions,
  ToastData,
} from "ngx-toasta";
import { HttpService } from "../../../services/http.service";
import { User } from "../../../core/models/user.model";
import { userToResponse } from "../../../core/mappers/user.mapper";

@Component({
  selector: "app-EditProfile",
  templateUrl: "./EditProfile.component.html",
  styleUrls: ["./EditProfile.component.scss"],
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
      first_name: ["", [Validators.required]],
      last_name: ["", [Validators.required]],
      gender: ["male"],
      date: [],
      phone_number: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.pattern(this.emailPattern)]],
    });

    this.http.getMe().subscribe((u) => (this.user = u));
  }

  submitProfileInfo() {
    if (this.info.valid) {
      const body = userToResponse(this.user);
      this.http.updateMe(body).subscribe({
         next: data => console.log(data),
         error: e => console.log(e),
         complete: () => {
            this.router.navigate(["/account/profile"]).then(() => {
                  this.toastyService.success(this.toastOption);
                  });
         }
      })      
    } else {
      for (let i in this.info.controls) {
        this.info.controls[i].markAsTouched();
      }
    }
  }
}
