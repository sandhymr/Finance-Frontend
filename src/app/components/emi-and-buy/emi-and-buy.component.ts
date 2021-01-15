import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FrequentlyAskedQuestions } from "src/app/models/faq";
import { EmiSchemadetails, Product } from "src/app/models/product";
import { Transaction } from "src/app/models/transaction";
import { User } from "src/app/models/user";
import { ProductService } from "src/app/services/product.service";
import { TransactionService } from "src/app/services/transaction.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-emi-and-buy",
  templateUrl: "./emi-and-buy.component.html",
  styleUrls: ["./emi-and-buy.component.css"],
})
export class EmiAndBuyComponent implements OnInit {
  transaction: Transaction = new Transaction();
  productId: number = parseInt(sessionStorage.getItem("productId"));
  userId: number = parseInt(sessionStorage.getItem("userId"));
  product: Product = new Product();
  user: User;
  flag: boolean = false;
  flag1:boolean=false;
  result: Transaction;
  faq: FrequentlyAskedQuestions[];
  constructor(
    private productService: ProductService,
    private userService: UserService,
    private transactionService: TransactionService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.getUserDetails();
    this.flag = sessionStorage.getItem("cardType") === "Gold" ? true : false;
    this.getProductDetails();
    this.getFaqDetails();
  }

  getProductDetails() {
    this.productService
      .findProductByProductId(this.productId)
      .subscribe((data) => {
        if (data != null) {
          this.product = data;
          this.emiCalculation(this.product);
          console.log(JSON.stringify(this.product));
        } else {
          alert("Product details not found");
        }
      });
  }

  // getUserDetails() {
  //   this.userService.findUserById(this.userId).subscribe((data) => {
  //     if (data != null) {
  //       this.user = data;
  //       console.log(this.user.cardType);
  //       if (this.user.cardType == "Gold") {
  //         this.flag = true;
  //       } else {
  //         this.flag = false;
  //       }
  //     } else {
  //       alert("invalid user");
  //     }
  //   });
  // }

  pay() {
    this.transaction.userId = this.userId;
    this.transaction.productId = this.productId;
    console.log(this.transaction.userId);
    console.log(this.transaction.productId);
    console.log(this.transaction.emiScheme);
    this.transactionService.buyProduct(this.transaction).subscribe((data) => {
      this.result = data;
      if (this.result.status == "SUCCESS") {
        alert(this.result.message);
        this.router.navigate(["invoice"], {
          queryParams: { transaction: JSON.stringify(this.result) },
        });
      } else {
        alert(this.result.message);
      }
    });
  }

  emiCalculation(product: Product) {
    let count = 0;
    if (product.price < 5000) {
      count = 3;
    } else if (product.price >= 5000 && product.price < 10000) {
      count = 4;
    } else if (product.price >= 10000 && product.price < 50000) {
      count = 6;
    } else {
      count = 8;
    }
    let emiSchemadetails: EmiSchemadetails[] = [];
    for (let i = 1; i <= count; i++) {
      emiSchemadetails = [
        ...emiSchemadetails,
        {
          emiScheme: `${i + 1} Months`,
          processingFee: this.flag
            ? (((product.price / 100) * 6) / (i + 1)).toFixed(3)
            : (((product.price / 100) * 4) / (i + 1)).toFixed(3),
          amountPerMonth: (product.price / (i + 1)).toFixed(3),
          noOfMonth: i + 1,
        },
      ];
    }
    product.emiSchemadetails = emiSchemadetails;
  }

  getFaqDetails() {
    this.productService
      .viewFrequentlyAskedQuestionsByProductId(this.productId)
      .subscribe((data) => {
        if (data != null) {
          this.faq = data;
          this.flag1=true;
        } else {
          alert("no records found");
          this.flag1=false;
        }
      });
  }
}
