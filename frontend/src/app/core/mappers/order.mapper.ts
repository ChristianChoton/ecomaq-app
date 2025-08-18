import { Order } from "../models/order.model";
import { OrderResponse } from "../reponse-models/order-response.model";

export function orderToModel(o: OrderResponse): Order {
  return {
    id: o._id,
    items: o.items,
    shipper: o.shipper,
    status: o.status,
    subtotal: o.subtotal,
    tax: o.tax,
    total: o.total,
    user: o.user,
    date: o.createdAt
  };
}