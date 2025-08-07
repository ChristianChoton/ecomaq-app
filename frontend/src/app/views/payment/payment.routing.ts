import { Routes } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { DetailComponent } from "./detail/detail.component";

export const PaymentRoutes: Routes = [
  {
    path: "",
    component: SigninComponent,
  },
  {
    path: "signin",
    component: SigninComponent,
  },
  {
    path: "payment",
    component: DetailComponent,
  },
];
