import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FrequentlyAskedQuestions } from "../models/faq";
import { Product } from "../models/product";
import { Transaction } from "../models/transaction";

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

  public findProductPurchasedWithUserId(
    userId: number
  ): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(
      "http://localhost:8181/productsPurchasedByUser?userId=" + userId
    );
  }

  public viewFrequentlyAskedQuestionsByProductId(
    productId: number
  ): Observable<FrequentlyAskedQuestions[]> {
    return this.http.get<FrequentlyAskedQuestions[]>(
      "http://localhost:8181/viewFrequentlyAskedQuestionsByProductId?productId=" +
        productId
    );
  }
}
