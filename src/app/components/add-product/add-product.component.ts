import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "src/app/models/product";
import { AdminService } from "src/app/services/admin.service";
import { SnackbarService } from "src/app/services/snackbar.service";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"],
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  result: any;
  constructor(
    private adminService: AdminService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit() {}

  addProduct() {
    this.adminService.addProduct(this.product).subscribe((data) => {
      this.result = data;
      if (this.result.productId != null) {
        // alert("The Product is Added Successfully!!");
        this.snackbar.success("The Product is Added Successfully!!");
        window.location.reload();
      } else {
        // alert("Product is not Added");
        this.snackbar.success("Product is not added!!");
      }
    });
  }
}
