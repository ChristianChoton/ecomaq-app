import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Product } from "../core/models/product.model";
import { ProductResponse } from "../core/reponse-models/product-response.model";
import { productToModel } from "../core/mappers/product.mapper";
import { userToModel } from "../core/mappers/user.mapper";
import { environment } from "../../environments/environment";
import { Token } from "../core/models/token.model";
import { UserResponse } from "../core/reponse-models/user-response.model";
import { User } from "../core/models/user.model";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  baseRute = environment.apiUrl;

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

  public authLogin(body: any): Observable<Token> {
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

  private headers(): HttpHeaders {
    const token = localStorage.getItem('auth_token');
    return new HttpHeaders({
      "Content-Type": "application/json",
      Authorization:
        `Bearer ${token}`,
    });
  }
}
