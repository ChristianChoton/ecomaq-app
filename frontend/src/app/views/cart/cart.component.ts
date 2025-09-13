import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { Router } from "@angular/router";
import { ShoppingService } from "../../services/shopping.service";
import { PopupService } from "../../services/popup.service";

@Component({
  selector: "cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit, AfterViewChecked {
  products: any;
  quantityArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  popupResponse: any;

  constructor(private router: Router, private cdRef: ChangeDetectorRef, public shopping: ShoppingService, private popup: PopupService) {}

  ngOnInit() {
    
  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }  
  
  public getProductResponse(response: any) {
      this.products = null;
      let data = response.men
        .concat(response.women)
        .concat(response.gadgets)
        .concat(response.accessories);
      this.products = data;
  }

  public removeProduct(value: any) {
    let message = "Are you sure you want to delete this product?";
    this.popup.confirmationPopup(message).subscribe(
      (res) => {
        this.popupResponse = res;
      },
      (err) => console.log(err),
      () => this.getPopupResponse(this.popupResponse, value)
    );
  }

  public getPopupResponse(response: any, value: any) {
    if (response) {
      this.shopping.removeLocalCartProduct(value);
    }
  }

  public calculateProductSinglePrice(product: any, value: any) {
    let price = 0;
    product.quantity = value;
    price = product.price * value;
    return price;
  }

  public calculateTotalPrice() {
    let subtotal = 0;
    if (
      this.shopping.localStorageCartProducts &&
      this.shopping.localStorageCartProducts.length > 0
    ) {
      for (let product of this.shopping.localStorageCartProducts) {
        subtotal += product.price * product.quantity;
      }
      return subtotal;
    }
    return subtotal;
  }

  public getTotalPrice() {
    let total = 0;
    if (
      this.shopping.localStorageCartProducts &&
      this.shopping.localStorageCartProducts.length > 0
    ) {
      for (let product of this.shopping.localStorageCartProducts) {
        total += product.price * product.quantity;
      }
      total += this.shopping.shipping + this.shopping.tax;
      return total;
    }

    return total;
  }

  public updateLocalCartProduct() {
    this.shopping.updateAllLocalCartProduct(
      this.shopping.localStorageCartProducts
    );
    this.router.navigate(["/checkout"]);
  }

  public getQuantityValue(product: any) {
    if (!product.quantity) {
      product.quantity = 1;
    } 

    return product.quantity
  }

  public onChange(value: any, product: any) {
    product.quantity = value;
    this.shopping.updateLocalCartProduct(product);
  }
}
