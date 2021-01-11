import { Component, OnInit } from "@angular/core";
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
  product: Product = new Product();

  constructor(private productService: ProductService) {}

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
  }

  viewProduct(product: Product) {
    this.product = JSON.parse(JSON.stringify(product));
    $("#productModal").modal("show");
  }

  buy() {}
}
