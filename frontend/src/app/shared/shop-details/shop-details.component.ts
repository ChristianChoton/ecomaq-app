import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../core/models/product.model';
import { ShoppingService } from '../../services/shopping.service';

@Component({
  selector: 'shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss']
})
export class ShopDetailsComponent {
   @Input() detailData : Product;
 
   mainImgPath   : string;
   totalPrice    : any;
   quantityArray : number[] = [1,2,3,4,5,6,7,8,9,10];

   constructor(private router: Router, private shopping: ShoppingService) {}

   ngOnInit() {
      this.mainImgPath = this.detailData.image;
      this.totalPrice  = this.detailData.price; 
   }

   ngOnChanges() {
      this.mainImgPath = "";
      this.totalPrice  = null;
      this.mainImgPath = this.detailData.image;
      this.totalPrice  = this.detailData.price; 
   }

   public getImagePath(imgPath: string, index:number) {
      document.querySelector('.border-active')!.classList.remove('border-active');
      this.mainImgPath = imgPath;
      document.getElementById(index+'_img')!.className += " border-active";
   }

   public calculatePrice(detailData:any, value: any) {
      detailData.quantity = value;
      this.totalPrice = detailData.price*value;
   }

   showTechnicalSheet = (value:any) => window.open(`${value.pdf}`, "_blank");

   public addToWishlist = (value:any) => this.shopping.addToWishlist(value);
   
   public addToCart = (value:any) => this.shopping.addToCart(value);
   
   public buyNow(value:any) {
      this.shopping.buyNow(value);
      this.router.navigate(['/checkout']);
   }
}
