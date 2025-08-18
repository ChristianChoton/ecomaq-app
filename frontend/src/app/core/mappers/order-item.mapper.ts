import { OrderItem } from "../models/order-item.model";
import { Product } from "../models/product.model";

export function productToOrderItem(p: Product): OrderItem {
  return {
    product: p.id,
    name: p.name,
    unitPrice: p.price,
    quantity: p.quantity,
  };
}