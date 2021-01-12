import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FrequentlyAskedQuestions } from "../models/faq";
import { Product } from "../models/product";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  constructor(private http: HttpClient) {}

  public viewAllNotCardHolders(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8181/viewAllNotCardHolders");
  }

  public viewAllCardHolders(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8181/viewAllCardHolders");
  }

  public viewCardHoldersByType(cardType: string): Observable<User[]> {
    return this.http.get<User[]>(
      "http://localhost:8181/viewCardHoldersByType?cardType=" + cardType
    );
  }

  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>("http://localhost:8181/addProduct", product);
  }

  public generateCard(userId: number): Observable<any> {
    return this.http.get<any>(
      "http://localhost:8181/generateCard?userId=" + userId
    );
  }
}
