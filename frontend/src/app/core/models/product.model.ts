import { Category } from "./category.model";

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    rating: number;
    stock: number;
    currency: string;
    category: Category;

    quantity: number;
    inventoryStatus: string;
}