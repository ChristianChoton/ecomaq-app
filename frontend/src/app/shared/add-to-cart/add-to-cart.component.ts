import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent {
   @Input() product : any ;

   @Output() addToCart: EventEmitter<any> = new EventEmitter();

   constructor() { }

   public addToCartProduct(product:any) {
      this.addToCart.emit(product);
   }
}
