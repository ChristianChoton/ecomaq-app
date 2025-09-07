import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "../../../services/http.service";
import { Product } from "../../../core/models/product.model";

@Component({
  selector: "machinery-list",
  templateUrl: "./machinery-list.component.html",
  styleUrls: ["./machinery-list.component.scss"],
})
export class MachineryListComponent implements OnInit {
  pageTitle: string = "Maquinaria";
  products: Product[] = [];
  private startedListProducts: Product[] = [];

  category: string;

  constructor(private route: ActivatedRoute, private http: HttpService) {}

  ngOnInit() {
    this.route.queryParams.forEach((param) => {
      this.category = param["category"];
      this.getProductList();
    });
  }

  private getProductList() {
    if (this.category) {
      this.http.getProductsByCategory(this.category).subscribe((r) => {
        this.products = r;
        this.startedListProducts = r;
      });
      return;
    }

    this.http.getProductsByCategoryType("machinery").subscribe((r) => {
      this.products = r;
      this.startedListProducts = r;
    });
  }

  filterData(filters: any) {
    this.products = this.startedListProducts;
    if (filters.name) {
      this.products = this.products.filter((p) =>
        p.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }

    if (filters.rating) {
      this.products = this.products.filter((p) => p.rating === filters.rating);
    }

    this.products = this.products.filter(
      (p) => p.price >= filters.price[0] && p.price <= filters.price[1]
    );
  }

  clearFilters = () => (this.products = this.startedListProducts);
}
