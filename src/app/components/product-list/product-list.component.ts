import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "src/app/models/product";
import { ProductService } from "src/app/services/product.service";
declare var $;
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  showProducts: boolean = false;
  showHeader: boolean = true;
  product: Product = new Product();

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.viewAllProducts();
  }

  viewAllProducts() {
    this.productService.viewAllProducts().subscribe((data) => {
      if (data != null) {
        this.showProducts = true;
        this.products = data;
      } else {
        this.showProducts = false;
      }
    });
    if (sessionStorage.getItem("admin") != null) {
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
  }

  viewProduct(product: Product) {
    this.product = JSON.parse(JSON.stringify(product));
    $("#productModal").modal("show");
  }

  buy(details: Product) {
    if (sessionStorage.getItem("userId") != null) {
      sessionStorage.setItem("productId", details.productId.toString());
      this.router.navigate(["buyProduct"]);
    } else {
      this.router.navigate(["login"]);
    }
  }
}
