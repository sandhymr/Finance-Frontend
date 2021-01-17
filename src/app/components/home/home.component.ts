import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  productName: String;
  product: Product = new Product();
  constructor(private productService: ProductService) {}

  ngOnInit() {}

  // public viewProductByType(name: String) {
  // this.productName=name;
  //   this.productService.viewProductByFilter(name).subscribe((data) => {
  //     if (data == null) {
  //       console.log("Invalid Product type");
  //     } else {
  //       console.log(JSON.stringify(data));
  //     }
  //   });
  // }
}
