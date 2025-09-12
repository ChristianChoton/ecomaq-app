import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Product } from "../core/models/product.model";
import { ProductResponse } from "../core/reponse-models/product-response.model";
import { productToModel } from "../core/mappers/product.mapper";
import { userToModel } from "../core/mappers/user.mapper";
import { Token } from "../core/models/token.model";
import { UserResponse } from "../core/reponse-models/user-response.model";
import { User } from "../core/models/user.model";
import { Auth } from "../core/models/auth.model";
import { UserCreate } from "../core/models/user-create.model";
import { Order } from "../core/models/order.model";
import { OrderCreate } from "../core/models/order-create.model";
import { OrderResponse } from "../core/reponse-models/order-response.model";
import { orderToModel } from "../core/mappers/order.mapper";
import { CommentCreate } from "../core/models/comment-create.model";
import { Comment } from "../core/models/comment.model";
import { CommentResponse } from "../core/reponse-models/comment-response.model";
import { commentToModel } from "../core/mappers/comment.mapper";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  baseRute = "https://ecomaq-api.onrender.com/api/";

  public getProducts(): Observable<Product[]> {
    return this.http
      .get<ProductResponse[]>(`${this.baseRute}products`, {
        headers: this.headers(),
      })
      .pipe(map((products) => products.map(productToModel)));
  }

  public getProductsByCategory(id: string): Observable<Product[]> {
    return this.http
      .get<ProductResponse[]>(`${this.baseRute}categories/${id}/products`, {
        headers: this.headers(),
      })
      .pipe(map((products) => products.map(productToModel)));
  }

  public getProductsByCategoryType(type: string): Observable<Product[]> {
    return this.http
      .get<ProductResponse[]>(
        `${this.baseRute}categories/type/${type}/products`,
        {
          headers: this.headers(),
        }
      )
      .pipe(map((products) => products.map(productToModel)));
  }

  public getProductById(id: string): Observable<Product> {
    return this.http
      .get<ProductResponse>(`${this.baseRute}products/${id}`, {
        headers: this.headers(),
      })
      .pipe(map(productToModel));
  }

   public updateProduct(id: string, body: any): Observable<Product> {
    return this.http
      .patch<ProductResponse>(`${this.baseRute}products/${id}`, body, {
        headers: this.headers(),
      })
      .pipe(map(productToModel));
  }


  public authLogin(body: Auth): Observable<Token> {
    return this.http.post<Token>(`${this.baseRute}auth/login`, body);
  }

  public getMe(): Observable<User> {
    return this.http
      .get<UserResponse>(`${this.baseRute}users/me`, {
        headers: this.headers(),
      })
      .pipe(map(userToModel));
  }

  public updateMe(body: UserResponse): Observable<User> {
    return this.http
      .patch<UserResponse>(`${this.baseRute}users/me`, body, {
        headers: this.headers(),
      })
      .pipe(map(userToModel));
  }

  public createUser(body: UserCreate): Observable<Token> {
    return this.http.post<Token>(`${this.baseRute}auth/register`, body, {
      headers: this.headers(),
    });
  }

  public createOrder(body: OrderCreate) {
    return this.http.post(`${this.baseRute}orders`, body, {
      headers: this.headers(),
    });
  }

  public getOrders(): Observable<Order[]> {
    return this.http
      .get<OrderResponse[]>(`${this.baseRute}orders`, {
        headers: this.headers(),
      })
      .pipe(map((orders) => orders.map(orderToModel)));
  }

  public createComment(body: CommentCreate) {
    return this.http.post(`${this.baseRute}comments`, body, {
      headers: this.headers(),
    });
  }

  public getComments(): Observable<Comment[]> {
    return this.http
      .get<CommentResponse[]>(`${this.baseRute}comments/all`, {
        headers: this.headers(),
      })
      .pipe(map((orders) => orders.map(commentToModel)));
  }

  private headers(): HttpHeaders {
    const token = localStorage.getItem("auth_token");
    return new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });
  }
}
