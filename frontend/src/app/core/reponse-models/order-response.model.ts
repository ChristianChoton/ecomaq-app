import { OrderItem } from "../models/order-item.model";

export interface OrderResponse {
  _id: string;
  user: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipper: number;
  total: number;
  status: string;
  createdAt: string;  
}
