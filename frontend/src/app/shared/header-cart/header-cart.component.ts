import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.scss']
})
export class HeaderCartComponent implements OnInit, OnChanges {
   @Input() cartProducts : any;
   @Input() count        : any;
   @Input() currency     : string = '';

   mobWidth : any;
   mobScreenSize : number = 767;

   @Output() removeProductData : EventEmitter<any> = new EventEmitter();  

   hiddenBadge = true;

   constructor() {
      this.mobWidth = window.screen.width;
   }
   
   ngOnInit() {
   }

   ngOnChanges() {
      if(this.count && this.count != 0) {
         this.hiddenBadge = false;
      } else {
         this.hiddenBadge = true;
      }
   }

   public confirmationPopup(product:any) {
      this.removeProductData.emit(product);
   }

   public calculatePrice(product: any) {
      let total = 0;
      total = product.price*product.quantity;
      return total;
   }
}
