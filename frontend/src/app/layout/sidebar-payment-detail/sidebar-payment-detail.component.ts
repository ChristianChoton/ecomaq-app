import { Component } from '@angular/core';
import { EmbryoService } from '../../services/Embryo.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ShoppingService } from '../../services/shopping.service';
import { HelperService } from '../../services/helper.service';
import { PopupService } from '../../services/popup.service';
@Component({
  selector: 'sidebar-payment-detail',
  templateUrl: './sidebar-payment-detail.component.html',
  styleUrls: ['./sidebar-payment-detail.component.scss']
})
export class SidebarPaymentDetailComponent {
 cartProducts  : any;
   popupResponse : any;

   constructor(public shopping: ShoppingService, private loadingBar: LoadingBarService, public helper: HelperService, public popup: PopupService) { }

   public calculateTotalPrice() {
      let subtotal = 0;
      if(this.shopping.localStorageCartProducts && this.shopping.localStorageCartProducts.length>0) {
         for(let product of this.shopping.localStorageCartProducts) {
            subtotal += (product.price *product.quantity) ;
         }
      }
      return subtotal;
   }

   public removeProduct(value) {
      let message = "Are you sure you want to delete this product?";
      this.popup.confirmationPopup(message).
         subscribe(res => {this.popupResponse = res},
                   err => console.log(err),
                   ()  => this.getPopupResponse(this.popupResponse, value)
                  );
   }

   public getPopupResponse(response, value) {
      if(response){
         this.shopping.removeLocalCartProduct(value);
         this.helper.paymentSidenavOpen = false;
      }
   }

   public calculateProductSinglePrice(product:any, value: any) {
      let price = 0;
      product.quantity = value;
      price = product.price*value;
      return price;
   }

   public getTotalPrice() {
      let total = 0;
      if(this.shopping.localStorageCartProducts && this.shopping.localStorageCartProducts.length>0) {
         for(let product of this.shopping.localStorageCartProducts) {
            total += (product.price*product.quantity);
         }
         total += (this.shopping.shipping+this.shopping.tax);
      }
      return total;
   }
}
