import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmbryoService } from '../../services/Embryo.service';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent {
   @Input() wishListProducts : any;
   @Input() count        : number;
   @Input() currency      : string;

   @Output() removeWishListData : EventEmitter<any> = new EventEmitter();
   @Output() addAllWishlistToCart : EventEmitter<any> = new EventEmitter();
   @Output() addToCart: EventEmitter<any> = new EventEmitter();

   hiddenBadge = true;

   constructor() { }

   ngOnChanges() {
      if(this.count && this.count != 0) {
         this.hiddenBadge = false;
      } else {
         this.hiddenBadge = true;
      }
   }

   public confirmationPopup(product:any) {
      this.removeWishListData.emit(product);
   }

   public addAllToCart() {
      this.addAllWishlistToCart.emit(this.wishListProducts);
   }

   public calculatePrice(product) {
      let total = 0;
      total = product.price*product.quantity;
      return total;
   }

   public addToCartProduct(product) {
      this.addToCart.emit(product);
   }
}
