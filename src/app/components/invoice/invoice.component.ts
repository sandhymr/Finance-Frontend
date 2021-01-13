import { Component, Input, OnInit } from "@angular/core";
import { Transaction } from "../../models/transaction";
import jspdf from "jspdf";
import html2canvas from "html2canvas";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.css"],
})
export class InvoiceComponent implements OnInit {
  userName: string = sessionStorage.getItem("userName");
  emiCompleted: boolean = false;
  @Input() transaction: Transaction = new Transaction();
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((res) => {
      this.transaction = JSON.parse(res.transaction);
      console.log(res);
    });
    this.isComlpete();
  }

  isComlpete() {
    if (this.transaction.emiCompleted) {
      this.emiCompleted = true;
    }
  }

  public convetToPDF() {
    let data = document.getElementById("pdf");
    html2canvas(data).then((canvas) => {
      const contentDataURL = canvas.toDataURL("image/png");
      let pdf = new jspdf("l", "cm", "a4"); //Generates PDF in landscape mode
      // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
      pdf.addImage(contentDataURL, "PNG", 0, 0, 29.7, 21.0);
      pdf.save("TransactionInvoice");
    });
  }
}
