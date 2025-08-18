import { OrderItem } from "./order-item.model";

export interface OrderCreate {
    user: string;
    items: OrderItem[];
    subtotal: number;
    tax: number;
    shipper: number;
    total: number;
    status: string;    
}