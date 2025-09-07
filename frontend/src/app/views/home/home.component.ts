import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { ShoppingService } from "../../services/shopping.service";
import { HelperService } from "../../services/helper.service";
import { HttpService } from "../../services/http.service";
import { Product } from "../../core/models/product.model";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, AfterViewChecked {
  blogList: any;
  productReviews: any;
  productsArray: Product[] = [];
  productsSliderData: Product[] = [];
  newProductsSliderData: Product[] = [];

  newArrivalSelectedTab: any = 0;
  featuredProductsSelectedTab: any = 0;

  singleProduct: Product;

  constructor(
    private cdRef: ChangeDetectorRef,
    private http: HttpService,
    private shopping: ShoppingService,
    public helper: HelperService
  ) {
    this.getFeaturedProducts();
    this.getBlogList();

    this.featuredProductsSelectedTab = 0;
    this.newArrivalSelectedTab = 0;
  }

  ngOnInit() {}

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  public getFeaturedProducts() {
    this.http.getProducts().subscribe((r) => {
      this.productsArray = r, 
      this.singleProduct = this.productsArray[26];
    });
  }

  public getBlogList() {
    this.blogList = [
      {
        name: "Carlos M.",
        city: "Lima, Perú",
        short_content:
          "Excelente tienda. Encontré todos los materiales que necesitaba para mi proyecto y llegaron puntualmente. La atención al cliente fue rápida y resolvieron mis dudas al instante. 100% recomendados.",
        post_date: "2025-01-06 15:30:25",
      },
      {
        name: " Ana R.",
        city: "Cusco, Perú",
        short_content:
          "Los precios son justos y la calidad de los productos es muy buena. Compré madera y cemento para mi obra y todo llegó en perfectas condiciones. Además, el sitio es fácil de navegar, es muy intuitivo.",
        post_date: "2025-02-15 12:30:25",
      },       
      {
        name: "José L.",
        city: "Arequipa, Perú",
        short_content:
          "Me sorprendió lo bien organizado que está todo. Pude cotizar desde la web y hacer seguimiento de mi pedido sin problemas. El casco de obra que compré incluso venía con garantía. Muy satisfecho con la compra.",
        post_date: "2025-04-02 19:30:25",
      },
    ];
  }

  public addToCart = (value) => this.shopping.addToCart(value);

  public addToWishlist = (value) => this.shopping.addToWishlist(value);

  public onFeaturedSelectedTab(tabIndex) {
    this.productsSliderData = [];
    let category = this.helper.category_product_list[tabIndex];
    this.productsSliderData = this.productsArray.filter(
      (p) => p.category.id === category
    );

    return true;
  }

  public onNewArrivalsSelectedTab(tabIndex) {
    this.newProductsSliderData = [];
    let category = this.helper.category_machinery_list[tabIndex];
    this.newProductsSliderData = this.productsArray.filter(
      (p) => p.category.id === category
    );
    return true;
  }
}
