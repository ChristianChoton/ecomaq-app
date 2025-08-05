import { Component, Input } from "@angular/core";
import { Product } from "../../core/models/product.model";

@Component({
  selector: "deal-of-day",
  templateUrl: "./deal-of-day.component.html",
  styleUrls: ["./deal-of-day.component.scss"],
})
export class DealOfDayComponent {
  @Input() singleProduct: Product;

  counterDateTime = new Date(new Date().setHours(20, 0, 0, 0));

  wood = ["wood_01", "wood_02", "wood_03"];

  constructor() {}
}
