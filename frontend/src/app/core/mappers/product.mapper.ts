import { Product } from "../models/product.model";
import { ProductResponse } from "../reponse-models/product-response.model";

export function toModel(p: ProductResponse): Product {
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

    category: {
      id: p.category._id,
      name: p.category.name,
      description: p.category.description,
      rute: p.category.rute,
      type: p.category.type
    }
  };
}