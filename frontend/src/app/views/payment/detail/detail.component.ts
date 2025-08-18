import { Component, OnInit } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { ShoppingService } from "../../../services/shopping.service";
import { Router } from "@angular/router";
import { HelperService } from "../../../services/helper.service";
import { OrderItem } from "../../../core/models/order-item.model";
import { productToOrderItem } from "../../../core/mappers/order-item.mapper";
import { UserService } from "../../../services/user.service";
import { HttpService } from "../../../services/http.service";
import { OrderCreate } from "../../../core/models/order-create.model";

@Component({
  selector: "payment-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit {
  step = 0;
  isDisabledPaymentStepTwo = true;
  isDisabledPaymentStepThree = false;
  emailPattern: any = /\S+@\S+\.\S+/;

  paymentFormOne: UntypedFormGroup;

  constructor(
    public shopping: ShoppingService,
    private formGroup: UntypedFormBuilder,
    public router: Router,
    public helper: HelperService,
    private _user: UserService,
    private http: HttpService
  ) {
    this.shopping.removeBuyProducts();
  }

  ngOnInit() {
    this.paymentFormOne = this.formGroup.group({
      user_details: this.formGroup.group({
        first_name: ["", [Validators.required]],
        last_name: ["", [Validators.required]],
        street_name_number: ["", [Validators.required]],
        city_state: ["", [Validators.required]],
        country: ["", [Validators.required]],
        mobile: ["", [Validators.required]],
        email: [
          "",
          [Validators.required, Validators.pattern(this.emailPattern)],
        ],
      }),
      payment: this.formGroup.group({
        card_number: ["", [Validators.required]],
        user_card_name: ["", [Validators.required]],
        cvv: ["", [Validators.required]],
        expiry_date: ["", [Validators.required]],
        card_id: [1],
        bank_card_value: [null],
      }),
    });
  }

  ngAfterViewInit() {}

  public setStep(index: number) {
    this.step = index;
    switch (index) {
      case 0:
        this.isDisabledPaymentStepTwo = true;
        this.isDisabledPaymentStepThree = true;
        break;
      case 1:
        this.isDisabledPaymentStepThree = false;
        break;
      default:
        break;
    }
  }

  public toggleRightSidenav() {
    this.helper.paymentSidenavOpen = !this.helper.paymentSidenavOpen;
  }

  public getCartProducts() {
    let total = 0;
    if (
      this.shopping.localStorageCartProducts &&
      this.shopping.localStorageCartProducts.length > 0
    ) {
      for (let product of this.shopping.localStorageCartProducts) {
        if (!product.quantity) {
          product.quantity = 1;
        }
        total += product.price * product.quantity;
      }
      total += this.shopping.shipping + this.shopping.tax;
      return total;
    }
    return total;
  }

  public submitPayment() {
    let userDetailsGroup = <UntypedFormGroup>(
      this.paymentFormOne.controls["user_details"]
    );
    if (userDetailsGroup.valid) {
      switch (this.step) {
        case 0:
          this.step = 1;
          this.isDisabledPaymentStepTwo = false;
          break;
        case 1:
          this.step = 2;
          break;

        default:
          // code...
          break;
      }
    } else {
      this.isDisabledPaymentStepTwo = true;
      this.isDisabledPaymentStepThree = true;
      for (let i in userDetailsGroup.controls) {
        userDetailsGroup.controls[i].markAsTouched();
      }
    }
  }

  public selectedPaymentTabChange(value) {
    let paymentGroup = <UntypedFormGroup>(
      this.paymentFormOne.controls["payment"]
    );

    paymentGroup.markAsUntouched();

    if (value && value.index == 1) {
      paymentGroup.controls["card_number"].clearValidators();
      paymentGroup.controls["user_card_name"].clearValidators();
      paymentGroup.controls["cvv"].clearValidators();
      paymentGroup.controls["expiry_date"].clearValidators();

      paymentGroup.controls["bank_card_value"].setValidators([
        Validators.required,
      ]);
    } else {
      paymentGroup.controls["card_number"].setValidators([Validators.required]);
      paymentGroup.controls["user_card_name"].setValidators([
        Validators.required,
      ]);
      paymentGroup.controls["cvv"].setValidators([Validators.required]);
      paymentGroup.controls["expiry_date"].setValidators([Validators.required]);

      paymentGroup.controls["bank_card_value"].clearValidators();
    }

    paymentGroup.controls["card_number"].updateValueAndValidity();
    paymentGroup.controls["user_card_name"].updateValueAndValidity();
    paymentGroup.controls["cvv"].updateValueAndValidity();
    paymentGroup.controls["expiry_date"].updateValueAndValidity();
    paymentGroup.controls["bank_card_value"].updateValueAndValidity();
  }

  public finalStep() {
    let paymentGroup = <UntypedFormGroup>(
      this.paymentFormOne.controls["payment"]
    );
    if (paymentGroup.valid) {
      this.shopping.addBuyUserDetails(this.paymentFormOne.value);
      const orderItems: OrderItem[] = this.shopping.buyUserCartProducts.map(
        (p) => productToOrderItem(p)
      );

      let subTotal = 0;
      for (let product of orderItems) {
        subTotal += product.unitPrice * product.quantity;
      }

      const total = subTotal + this.shopping.shipping + this.shopping.tax;

      const order: OrderCreate = {
        user: this._user.getUser()?.id!,
        items: orderItems,
        subtotal: subTotal,
        tax: this.shopping.tax,
        shipper: this.shopping.shipping,
        total: total,
        status: "completed",
      };

      this.http.createOrder(order).subscribe({
        next: (r) => console.log(r),
        error: (e) => console.log(e),
        complete: () => this.router.navigateByUrl('comment'),
      });
    } else {
      for (let i in paymentGroup.controls) {
        paymentGroup.controls[i].markAsTouched();
      }
    }
  }
}
