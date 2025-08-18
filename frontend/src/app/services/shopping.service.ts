import { Injectable } from "@angular/core";
import { ToastaConfig, ToastaService, ToastOptions } from "ngx-toasta";

@Injectable()
export class ShoppingService {
  localStorageCartProducts: any;
  localStorageWishlist: any;
  navbarCartCount: number = 0;
  navbarWishlistProdCount = 0;
  buyUserCartProducts: any;

  shipping: number = 12.95;
  tax: number = 27.95;
  currency  : string = 'PEN';
  
  constructor(
    private toastyService: ToastaService,
    private toastyConfig: ToastaConfig
  ) {
    this.toastyConfig.position = "top-right";
    this.toastyConfig.theme = "material";
    this.calculateLocalWishlistProdCounts();
    localStorage.removeItem("user");
    localStorage.removeItem("byProductDetails");

    this.calculateLocalCartProdCounts();
  }

  public calculateLocalCartProdCounts() {
    this.localStorageCartProducts = null;
    this.localStorageCartProducts =
      JSON.parse(localStorage.getItem("cart_item")!) || [];
    this.navbarCartCount = +this.localStorageCartProducts.length;
  }

  public addToCart(data: any, type: any = "") {
    let products: any;
    products = JSON.parse(localStorage.getItem("cart_item")!) || [];
    let productsLength = products.length;

    let toastOption: ToastOptions = {
      title: "Agregar producto",
      msg: "Producto añadido al carrito",
      showClose: true,
      timeout: 1000,
      theme: "material",
    };

    let found = products.some(function (el, index) {
      if (el.name == data.name) {
        if (!data.quantity) {
          data.quantity = 1;
        }
        products[index]["quantity"] = data.quantity;
        return true;
      }

      return false;
    });

    if (!found) {
      if(!data.quantity){
        data.quantity = 1
      }
      products.push(data);
    }

    if (productsLength == products.length) {
      toastOption.title = "Producto ya agregado";
      toastOption.msg = "Ya has añadido este producto a la lista del carrito";
    }

    if (type == "wishlist") {
      this.removeLocalWishlistProduct(data);
    }

    this.toastyService.wait(toastOption);
    setTimeout(() => {
      localStorage.setItem("cart_item", JSON.stringify(products));
      this.calculateLocalCartProdCounts();
    }, 500);
  }

  public updateLocalCartProduct(product: any) {
    let products: any = JSON.parse(localStorage.getItem("cart_item")!);
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === product.id) {
        products[i] = product;
        break;
      }
    }
    
    setTimeout(() => {
      localStorage.setItem("cart_item", JSON.stringify(products));
    }, 100);
  }

  public removeLocalCartProduct(product: any) {
    let products: any = JSON.parse(localStorage.getItem("cart_item")!);

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === product.id) {
        products.splice(i, 1);
        break;
      }
    }

    let toastOption: ToastOptions = {
      title: "Quitar producto",
      msg: "Producto eliminado del carrito",
      showClose: true,
      timeout: 1000,
      theme: "material",
    };

    this.toastyService.wait(toastOption);
    setTimeout(() => {
      localStorage.setItem("cart_item", JSON.stringify(products));
      this.calculateLocalCartProdCounts();
    }, 500);
  }

  public addToWishlist(data: any) {
    let toastOption: ToastOptions = {
      title: "Agregar producto",
      msg: "Producto añadido a la lista de deseos",
      showClose: true,
      timeout: 1000,
      theme: "material",
    };

    let products: any;
    products = JSON.parse(localStorage.getItem("wishlist_item")!) || [];
    let productsLength = products.length;

    let found = products.some(function (el, index) {
      if (el.name == data.name) {
        if (!data.quantity) {
          data.quantity = 1;
        }
        products[index]["quantity"] = data.quantity;
        return true;
      }
    });
    if (!found) {
      if(!data.quantity){
        data.quantity = 1
      }
      products.push(data);
    }

    if (productsLength == products.length) {
      toastOption.title = "Producto ya agregado";
      toastOption.msg = "Ya has añadido este producto a la lista de deseos";
    }

    this.toastyService.wait(toastOption);
    setTimeout(() => {
      localStorage.setItem("wishlist_item", JSON.stringify(products));
      this.calculateLocalWishlistProdCounts();
    }, 500);
  }

  public calculateLocalWishlistProdCounts() {
    this.localStorageWishlist = null;
    this.localStorageWishlist =
      JSON.parse(localStorage.getItem("wishlist_item")!) || [];
    this.navbarWishlistProdCount = +this.localStorageWishlist.length;
  }

  public removeLocalWishlistProduct(product: any) {
    let products: any = JSON.parse(localStorage.getItem("wishlist_item")!);

    for (let i = 0; i < products.length; i++) {
      if (products[i].productId === product.productId) {
        products.splice(i, 1);
        break;
      }
    }

    const toastOption: ToastOptions = {
      title: "Eliminar producto",
      msg: "Producto eliminado de la lista de deseos",
      showClose: true,
      timeout: 1000,
      theme: "material",
    };

    this.toastyService.wait(toastOption);
    setTimeout(() => {
      localStorage.setItem("wishlist_item", JSON.stringify(products));
      this.calculateLocalWishlistProdCounts();
    }, 500);
  }

  public addAllWishListToCart(dataArray: any) {
    let a: any;
    a = JSON.parse(localStorage.getItem("cart_item")!) || [];

    for (let singleData of dataArray) {
      a.push(singleData);
    }

    let toastOption: ToastOptions = {
      title: "Añadir todos los productos",
      msg: "Añadiendo productos al carrito",
      showClose: true,
      timeout: 1000,
      theme: "material",
    };

    this.toastyService.wait(toastOption);
    setTimeout(() => {
      localStorage.removeItem("wishlist_item");
      localStorage.setItem("cart_item", JSON.stringify(a));
      this.calculateLocalCartProdCounts();
      this.calculateLocalWishlistProdCounts();
    }, 500);
  }

  public buyNow(data:any) {
		let products : any;
		products = JSON.parse(localStorage.getItem("cart_item")!) || [];

		let found = products.some(function (el, index) {
			if(el.name == data.name){
				if(!data.quantity) { data.quantity = 1}
				products[index]['quantity'] = data.quantity;
				return  true;
			}
		});
		if (!found) { products.push(data); }

		localStorage.setItem("cart_item", JSON.stringify(products));
		this.calculateLocalCartProdCounts();
	}

  public updateAllLocalCartProduct(products: any) {
    localStorage.removeItem("cart_item");
    localStorage.setItem("cart_item", JSON.stringify(products));
  }

  public removeBuyProducts() {
		localStorage.removeItem("byProductDetails");
		this.buyUserCartProducts = JSON.parse(localStorage.getItem("byProductDetails")!)
	}

  public addBuyUserDetails(formdata) {
		localStorage.setItem("user", JSON.stringify(formdata));

		let product = JSON.parse(localStorage.getItem("cart_item")!)
		localStorage.setItem("byProductDetails", JSON.stringify(product));
		this.buyUserCartProducts = JSON.parse(localStorage.getItem("byProductDetails")!)

		localStorage.removeItem("cart_item");
		this.calculateLocalCartProdCounts();
	}
}
