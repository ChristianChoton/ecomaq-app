import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ShoppingService } from "../../../services/shopping.service";
import { HttpService } from "../../../services/http.service";
import { Product } from "../../../core/models/product.model";
import { switchMap } from "rxjs";

@Component({
  selector: "machinery-detail",
  templateUrl: "./machinery-detail.component.html",
  styleUrls: ["./machinery-detail.component.scss"],
})
export class MachineryDetailComponent implements OnInit {
  product: Product | undefined;
  productsList: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private shopping: ShoppingService,
    private http: HttpService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = params.get("id");
          return this.http.getProductById(id!);
        }),
        switchMap((product) => {
          this.product = product;
          return this.http.getProductsByCategory(
            this.product.category.id
          );
        })
      )
      .subscribe((products) => {
        this.productsList = products.filter(
          (p) => p.id !== this.product!.id
        );
      });
  }

  public addToCart = (value: any) => this.shopping.addToCart(value);
  public addToWishList = (value: any) => this.shopping.addToWishlist(value);
}
