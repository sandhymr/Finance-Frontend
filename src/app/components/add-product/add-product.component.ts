import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product";
import { AdminService } from "src/app/services/admin.service";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"],
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  result: any;
  constructor(private adminService: AdminService) {}

  ngOnInit() {}

  addProduct() {
    this.adminService.addProduct(this.product).subscribe((data) => {
      this.result = data;
      if (this.result.productId != null) {
        alert("The Product is Added Successfully!!");
      } else {
        alert("Product is not Added");
      }
    });
  }
}
