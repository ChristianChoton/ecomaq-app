import { Product } from "../models/product.model";
import { ProductResponse } from "../reponse-models/product-response.model";

export function productToModel(p: ProductResponse): Product {
  return {
    id: p._id,
    name: p.name,
    description: p.description,
    price: p.price,
    stock: p.stock,
    image: `assets/images/${p?.imageCode}.jpg`,
    rating: p.rating,
    currency: p.currency,
    quantity: 0,
    inventoryStatus: getInventaryStatus(p.stock),

    category: {
      id: p.category._id,
      name: p.category.name,
      description: p.category.description,
      rute: p.category.rute,
      type: p.category.type
    }
  };
}

function getInventaryStatus(stock: number) {
    if(stock >= 10) {
      return 'INSTOCK'
    }

    if(stock < 10 && stock >= 0) {
      return 'LOWSTOCK'
    }

    return 'OUTOFSTOCK'
}

