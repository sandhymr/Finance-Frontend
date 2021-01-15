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
  public viewTransactionsForUserId(userID: number): Observable<Transaction[]>{
    return this.http.get<Transaction[]>('http://localhost:8181/viewAllTransactionsByUserId?userId='+userID);
  }

  public viewTransactionUsingTransactionId(transactionId: number): Observable<Transaction>{
    return this.http.get<Transaction>('http://localhost:8181/viewTransactionByTransactionId?transactionId='+transactionId);
  }

  public payEmi(transaction:Transaction): Observable<Transaction>{
    return this.http.post<Transaction>(
      "http://localhost:8181/payEmi",
      transaction
    );
  }
}
