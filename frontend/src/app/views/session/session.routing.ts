import { Routes } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { RegisterComponent } from "./register/register.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

export const SessionRoutes: Routes = [
  {
    path: "",
    component: SigninComponent,
  },
  {
    path: "signin",
    component: SigninComponent,
  },
  {
    path: "signup",
    component: RegisterComponent,
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
  },
];
