import { Component, Input, OnInit } from '@angular/core';
import { ShoppingService } from '../../../services/shopping.service';
import { HelperService } from '../../../services/helper.service';
import { HttpService } from '../../../services/http.service';
import { Auth } from '../../../core/models/auth.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-Signin',
  templateUrl: './Signin.component.html',
  styleUrls: ['./Signin.component.scss']
})
export class SigninComponent implements OnInit {


   constructor(public shopping : ShoppingService, public helper: HelperService, private http: HttpService, private router: Router) { }

   ngOnInit() {
   }

   public toggleRightSidenav() {
      this.helper.paymentSidenavOpen = !this.helper.paymentSidenavOpen;
   }

   public getCartProducts() {
      let total = 0;
      if(this.shopping.localStorageCartProducts && this.shopping.localStorageCartProducts.length>0) {
         for(let product of this.shopping.localStorageCartProducts) {
            if(!product.quantity){
               product.quantity = 1;
            }
            total += (product.price*product.quantity);
         }
         total += (this.shopping.shipping+this.shopping.tax);
         return total;
      }
      return total;  
   }

   handleLogin(auth: Auth) {
      let data;
      this.http.authLogin(auth).subscribe({
         next: r => data = r,
         error: e => console.log(e),
         complete: () => {
            localStorage.setItem('auth_token', data.token);
            this.router.navigateByUrl('/checkout/payment');
         }
      })
   } 
}
