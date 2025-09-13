import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../../core/models/product.model";
import { ShoppingService } from "../../services/shopping.service";
import { HttpService } from "../../services/http.service";


@Component({
  selector: "shop-details",
  templateUrl: "./shop-details.component.html",
  styleUrls: ["./shop-details.component.scss"],
})
export class ShopDetailsComponent {
  @Input() detailData: Product | undefined;

  mainImgPath: string = '';
  totalPrice: any;
  quantityArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  showAmountInput = false;
  customAmount: number | null = null;

  counterDateTime: Date | undefined;

  constructor(private router: Router, private shopping: ShoppingService, private http: HttpService) {}

  ngOnInit() {
    this.mainImgPath = this.detailData!.image;
    this.totalPrice = this.detailData!.price;

    const base = new Date();
    base.setHours(this.detailData!.isAuctioned ? 12 : 18, 0, 0, 0);

    if(base.getTime() < Date.now()){
        base.setDate(base.getDate() + 1);
    }

    this.counterDateTime = base;
  }

  ngOnChanges() {
    this.mainImgPath = "";
    this.totalPrice = null;
    this.mainImgPath = this.detailData!.image;
    this.totalPrice = this.detailData!.price;
  }

  public getImagePath(imgPath: string, index: number) {
    document.querySelector(".border-active")!.classList.remove("border-active");
    this.mainImgPath = imgPath;
    document.getElementById(index + "_img")!.className += " border-active";
  }

  public calculatePrice(detailData: any, value: any) {
    detailData.quantity = value;
    this.totalPrice = detailData.price * value;
  }

  showTechnicalSheet = (value: any) => window.open(`${value.pdf}`, "_blank");

  public addToWishlist = (value: any) => this.shopping.addToWishlist(value);

  public addToCart = (value: any) => this.shopping.addToCart(value);

  public buyNow(value: any) {
    this.shopping.buyNow(value);
    this.router.navigate(["/checkout"]);
  }

  toggleAmountInput() {
   if(localStorage.getItem('auth_token')) {
      this.http.getMe().subscribe({
         next: () => {},
         error: (e) => this.router.navigateByUrl('/session/signin'),
         complete: () => {
            this.showAmountInput = true
         },
      })
      
   } else {
      this.router.navigateByUrl('/session/signin');
   }
   
  };

  confirmAmount() {
    if (this.customAmount && this.customAmount > 0 && this.customAmount > this.detailData!.price) {
      this.http.updateProduct(this.detailData!.id, {price: this.customAmount}).subscribe({
         next: () => {},
         error: (e) => console.log(e),
         complete: () => {
            this.showAmountInput = false;
            this.customAmount = null;
            location.reload();
         },
      });
    }
  }
}
