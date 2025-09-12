import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
   @Input() product: Product;
   @Input() index   : any;
   @Input() type  : string = '';
   @Input() module: string;

   @Output() addToCart: EventEmitter<any> = new EventEmitter();
   @Output() addToWishlist: EventEmitter<any> = new EventEmitter();

   counterDateTime: Date;

   constructor() { }

   ngOnInit() {
      this.counterDateTime = new Date(new Date().setHours(this.product.isAuctioned ? 12 : 18, 0, 0, 0));
   }

   public addToCartProduct = (value:any) => this.addToCart.emit(value);
   
   public productAddToWishlist(value:any, parentClass) {
      if(!(document.getElementById(parentClass)!.classList.contains('wishlist-active'))){
         let element = document.getElementById(parentClass)!.className += " wishlist-active";
      }
      this.addToWishlist.emit(value);
   }

   public checkCartAlready(singleProduct) {
      let products = JSON.parse(localStorage.getItem("cart_item")!) || [];
      if (!products.some((item) => item.id == singleProduct.id)) {
         return true;
      }
   }
}
