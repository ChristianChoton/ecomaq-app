import { Component } from "@angular/core";
import { ShoppingService } from "../../services/shopping.service";
import { PopupService } from "../../services/popup.service";
import { HelperService } from "../../services/helper.service";

@Component({
  selector: "lheader",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  toggleActive: boolean = false;
  cartProducts: any;
  popupResponse: any;
  wishlistProducts: any;

  constructor(
    public popup: PopupService,
    public shopping: ShoppingService,
    public helper: HelperService
  ) {}

  public toggleSearch = () =>
    document.querySelector("app-main")!.classList.toggle("form-open");

  public toggleSidebar = () =>
    (this.helper.sidenavOpen = !this.helper.sidenavOpen);

  public openConfirmationPopup(value: any) {
    let message = "¿Estás seguro que deseas eliminar este producto?";
    this.popup.confirmationPopup(message).subscribe(
      (res) => {
        this.popupResponse = res;
      },
      (err) => console.log(err),
      () => this.getPopupResponse(this.popupResponse, value, "cart")
    );
  }

  public getPopupResponse(response: any, value: any, type) {
    if (response) {
      if (type == "cart") {
        this.shopping.removeLocalCartProduct(value);
      } else {
        this.shopping.removeLocalWishlistProduct(value);
      }
    }
  }

  public addAllWishlistToCart = (values: any) =>
    this.shopping.addAllWishListToCart(values);

  public openWishlistConfirmationPopup(value: any) {
    let message = "¿Estás seguro de que deseas agregar todos los productos?";
    this.popup.confirmationPopup(message).subscribe(
      (res) => {
        this.popupResponse = res;
      },
      (err) => console.log(err),
      () => this.getPopupResponse(this.popupResponse, value, "wishlist")
    );
  }

  public addToCart = (value) => this.shopping.addToCart(value, "wishlist");
}
