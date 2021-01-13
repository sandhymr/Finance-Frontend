import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Transaction } from "../models/transaction";

@Injectable({
  providedIn: "root",
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  public buyProduct(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(
      "http://localhost:8181/buyProduct",
      transaction
    );
  }
}
