import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from "../../../services/http.service";
import { Product } from "../../../core/models/product.model";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent {
  pageTitle: string = "Products";
  products: Product[] = [];

  constructor(private route: ActivatedRoute, private http: HttpService) {}

  ngOnInit() {
    this.route.queryParams.forEach((param) =>
      this.getProductList(param["category"])
    );
  }

  private getProductList(category: string) {
    if (category) {
      this.http
        .getProductsByCategory(category)
        .subscribe((r) => (this.products = r));
      return;
    }

    this.http.getProductsByCategoryType('product').subscribe((r) => (this.products = r));
  }
}
