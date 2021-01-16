import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product";
import { Transaction } from "src/app/models/transaction";
import { ProductService } from "src/app/services/product.service";
import { TransactionService } from "src/app/services/transaction.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  flag: boolean = false;
  cardchecker: string = sessionStorage.getItem("cardType");
  userName = sessionStorage.getItem("userName");
  noTransaction = false;
  notPurchased = false;
  constructor(
    private userService: UserService,
    private transactionService: TransactionService,
    private productService: ProductService
  ) {}
  cardTypebool: boolean = true;
  userId: number = parseInt(sessionStorage.getItem("userId"));
  docUpload: number = parseInt(sessionStorage.getItem("docUpload"));
  ngOnInit() {
    this.checkCard();
    this.viewProductsByUserId();
    this.viewTransactions();
    this.checkDoc();
  }
  totalCredit: number;
  creditRemaining: number;
  result: any;
  validityTill: string;
  result01: Transaction[];
  prod: Transaction[];
  checkCard() {
    if (this.cardchecker == "Gold") {
      this.cardTypebool = true;
    }
    if (this.cardchecker == "Titanium") {
      this.cardTypebool = false;
    }
    this.userService.getCardById(this.userId).subscribe((data) => {
      //this.card.cardId=data.cardId;

      if (data == null) {
        console.log("Invalid Card");
      } else {
        console.log(JSON.stringify(data));
        this.result = data;
        this.totalCredit = this.result.totalCredit;
        this.flag = this.result.user.cardStatus;
        this.validityTill = this.result.validity.toString();
        this.creditRemaining = this.result.creditRemaining;
      }
    });
  }
  tran01: Transaction = null;
  tran02: Transaction = null;
  tran03: Transaction = null;

  public viewTransactions() {
    this.transactionService
      .viewTransactionsForUserId(this.userId)
      .subscribe((data) => {
        if (data.length == 0) {
          console.log("No transactions yet");
          this.noTransaction = true;
        } else {
          this.noTransaction = false;
          this.result01 = data;
          console.log(JSON.stringify(data));
          this.result01 = data;

          if (data[0] != null) {
            this.tran01 = data.pop();
          }
          if (data[1] != null) {
            this.tran02 = data.pop();
          }
          if (data[2] != null) {
            this.tran03 = data.pop();
          }
        }
      });
  }
  pran01: Transaction = null;
  pran02: Transaction = null;
  pran03: Transaction = null;
  public viewProductsByUserId() {
    this.productService
      .findProductPurchasedWithUserId(this.userId)
      .subscribe((data) => {
        if (data.length == 0) {
          console.log("No products purchased yet");
          this.notPurchased = true;
        } else {
          this.notPurchased = false;
          this.prod = data;
          if (data[0] != null) {
            this.pran01 = data.pop();
          }
          if (data[1] != null) {
            this.pran02 = data.pop();
          }
          if (data[2] != null) {
            this.pran03 = data.pop();
          }
        }
      });
  }
  checkDoc() {
    if (this.docUpload != 1) {
      alert("Upload documents in document section to acivate ur card");
    }
  }
}
