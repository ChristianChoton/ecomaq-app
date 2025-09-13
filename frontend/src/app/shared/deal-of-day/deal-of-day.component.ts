import { Component, Input, OnInit } from "@angular/core";
import { Product } from "../../core/models/product.model";

@Component({
  selector: "deal-of-day",
  templateUrl: "./deal-of-day.component.html",
  styleUrls: ["./deal-of-day.component.scss"],
})
export class DealOfDayComponent implements OnInit {
  @Input() singleProduct: Product | undefined;

  counterDateTime: Date | undefined;

  wood = ["wood_01", "wood_02", "wood_03"];

  constructor() {}

  ngOnInit(): void {
    const base = new Date();
    base.setHours(20, 0, 0, 0);

    if (base.getTime() < Date.now()) {
      base.setDate(base.getDate() + 1);
    }

    this.counterDateTime = base;
  }
}
