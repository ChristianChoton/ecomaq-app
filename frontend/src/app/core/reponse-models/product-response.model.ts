import { CategoryResponse } from "./category-response.model";

export interface ProductResponse {
    _id: string;
    name: string;
    description: string;
    price: number;
    imageCode: string;
    rating: number;
    stock: number;
    currency: string;
    category: CategoryResponse;
}