import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "src/app/models/product";
import { Transaction } from "src/app/models/transaction";
import { ProductService } from "src/app/services/product.service";
import { SnackbarService } from "src/app/services/snackbar.service";
import { TransactionService } from "src/app/services/transaction.service";
declare var $;
@Component({
  selector: "app-productpurchased",
  templateUrl: "./productpurchased.component.html",
  styleUrls: ["./productpurchased.component.css"],
})
export class ProductpurchasedComponent implements OnInit {
  products: Transaction[];
  showProducts: boolean = false;
  showHeader: boolean = true;
  product: Product = new Product();
  isLoading = false;
  userId: number = parseInt(sessionStorage.getItem("userId"));
  result: Transaction;
  constructor(
    private productService: ProductService,
    private router: Router,
    private transactionService: TransactionService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit() {
    this.viewProductsByUserId();
  }
  public viewProductsByUserId() {
    this.productService
      .findProductPurchasedWithUserId(this.userId)
      .subscribe((data) => {
        if (data == null) {
          console.log("No products purchased yet");
        } else {
          this.products = data;
          console.log(JSON.stringify(data));
        }
      });
  }

  public payEmi(transaction: Transaction, index: number) {
    this.products[index].isLoading = true;
    transaction.userId = this.userId;
    console.log(transaction.userId);
    this.transactionService.payEmi(transaction).subscribe((data) => {
      if (data == null) {
        console.log("No transaction done");
      } else {
        this.result = data;
        if (this.result.status == "SUCCESS") {
          // alert(this.result.message);
          this.snackbar.success(this.result.message);
          this.router.navigate(["invoice"], {
            queryParams: { transaction: JSON.stringify(this.result) },
          });
        } else {
          // alert(this.result.message);
          this.snackbar.failed(this.result.message);
        }
      }
      this.products[index].isLoading = false;
    });
  }
}
