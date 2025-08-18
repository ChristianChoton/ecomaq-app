import { Component, Input } from "@angular/core";
import { Product } from "../../core/models/product.model";
import { ShoppingService } from "../../services/shopping.service";

@Component({
  selector: "grid-list-product",
  templateUrl: "./grid-list-product.component.html",
  styleUrls: ["./grid-list-product.component.scss"],
})
export class GridListProductComponent {

  constructor(private shopping: ShoppingService) {}

  @Input() products: Product[];
  @Input() module: string;

  getSeverity(item: Product) {
    switch (item.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warn";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  }

  buyProduct = (item: Product) => this.shopping.addToCart(item);
  addProduct = (item: Product) => this.shopping.addToWishlist(item);
}
