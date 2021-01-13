import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  public viewAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8181/viewAllProducts");
  }

  public viewProductByFilter(productType: String): Observable<Product[]> {
    return this.http.get<Product[]>(
      "http://localhost:8181/viewProductsByFilter?productType=" + productType
    );
  }

  public findProductByProductId(productId: number): Observable<Product> {
    return this.http.get<Product>(
      "http://localhost:8181/findProductById?productId=" + productId
    );
  }
}
