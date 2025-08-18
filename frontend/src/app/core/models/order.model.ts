import { OrderItem } from "./order-item.model";

export interface Order {
    id: string;
    user: string;
    items: OrderItem[];
    subtotal: number;
    tax: number;
    shipper: number;
    total: number;
    status: string;  
    date: string;
}