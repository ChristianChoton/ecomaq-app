import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Product } from "../core/models/product.model";
import { ProductResponse } from "../core/reponse-models/product-response.model";
import { toModel } from "../core/mappers/product.mapper";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  baseRute = "http://localhost:3000/api/";

  public getProducts(): Observable<Product[]> {
    return this.http
      .get<ProductResponse[]>(`${this.baseRute}products`, {
        headers: this.headers(),
      })
      .pipe(map((products) => products.map(toModel)));
  }

  public getProductsByCategory(id: string): Observable<Product[]> {
    return this.http.get<ProductResponse[]>(`${this.baseRute}categories/${id}/products`, {
      headers: this.headers(),
    })
    .pipe(map((products) => products.map(toModel)));
  }

  public getProductsByCategoryType(type: string): Observable<Product[]> {
    return this.http.get<ProductResponse[]>(`${this.baseRute}categories/type/${type}/products`, {
      headers: this.headers(),
    })
    .pipe(map((products) => products.map(toModel)));
  }

  public getProductById(id: string): Observable<Product> {
    return this.http.get<ProductResponse>(`${this.baseRute}products/${id}`, {
      headers: this.headers(),
    })
    .pipe(map(toModel));
  }

  private headers(): HttpHeaders {
    return new HttpHeaders({
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4N2U2OGNhN2IxYzYzMmVjMDg1MDkxOCIsImlhdCI6MTc1NDI3NDI4MiwiZXhwIjoxNzU0ODc5MDgyfQ.NPPTpbqrost_1t5-cx4aokjIwKGZN2pm-WcIpxa3Ri0",
    });
  }
}
