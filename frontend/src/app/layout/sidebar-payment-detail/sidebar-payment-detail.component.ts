import { Component } from '@angular/core';
import { EmbryoService } from '../../services/Embryo.service';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'sidebar-payment-detail',
  templateUrl: './sidebar-payment-detail.component.html',
  styleUrls: ['./sidebar-payment-detail.component.scss']
})
export class SidebarPaymentDetailComponent {
 cartProducts  : any;
   popupResponse : any;

   constructor(public embryoService: EmbryoService, private loadingBar: LoadingBarService) { }

   public calculateTotalPrice() {
      let subtotal = 0;
      if(this.embryoService.localStorageCartProducts && this.embryoService.localStorageCartProducts.length>0) {
         for(let product of this.embryoService.localStorageCartProducts) {
            subtotal += (product.price *product.quantity) ;
         }
      }
      return subtotal;
   }

   public removeProduct(value) {
      let message = "Are you sure you want to delete this product?";
      this.embryoService.confirmationPopup(message).
         subscribe(res => {this.popupResponse = res},
                   err => console.log(err),
                   ()  => this.getPopupResponse(this.popupResponse, value)
                  );
   }

   public getPopupResponse(response, value) {
      if(response){
         this.embryoService.removeLocalCartProduct(value);
         this.embryoService.paymentSidenavOpen = false;
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
      if(this.embryoService.localStorageCartProducts && this.embryoService.localStorageCartProducts.length>0) {
         for(let product of this.embryoService.localStorageCartProducts) {
            total += (product.price*product.quantity);
         }
         total += (this.embryoService.shipping+this.embryoService.tax);
      }
      return total;
   }
}
