import { Component, Input, OnInit } from "@angular/core";
import { Product } from "../../models/product";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product = new Product();
  constructor() {}

  ngOnInit() {}
}
