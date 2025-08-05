import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
   @Input() products : Product[] = [] ;
   @Input() gridLength : any;
   @Input() gridThree : boolean = false;

   @Output() addToCart: EventEmitter<any> = new EventEmitter();
   @Output() addToWishList: EventEmitter<any> = new EventEmitter();

   loaded = false;
   lg     = 25;
   xl     = 25;

   trackByObjectID(index, hit) {
      return hit.objectID;
   }

   constructor() { }

   ngOnInit() {

      if(this.gridThree) {
         this.lg = 33;
         this.xl = 33;
      }
   }

   public addToCartProduct(value:any) {
      this.addToCart.emit(value);
   }

   public onLoad() {
      this.loaded = true;
   }

   public productAddToWishlist(value:any, parentClass) {
      if(!(document.getElementById(parentClass)!.classList.contains('wishlist-active'))){
         let element = document.getElementById(parentClass)!.className += " wishlist-active";
      }
      this.addToWishList.emit(value);
   }

   public checkCartAlready(singleProduct) {
      let products = JSON.parse(localStorage.getItem("cart_item")!) || [];
      if (!products.some((item) => item.name == singleProduct.name)) {
         return true;
      }
   }
}
