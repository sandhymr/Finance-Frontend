import { Component, OnInit } from '@angular/core';
import { FrequentlyAskedQuestions } from "src/app/models/faq";
import { AdminService } from "src/app/services/admin.service";

@Component({
  selector: 'app-add-faq',
  templateUrl: './add-faq.component.html',
  styleUrls: ['./add-faq.component.css']
})
export class AddFAQComponent implements OnInit {
  faq: FrequentlyAskedQuestions = new FrequentlyAskedQuestions();
  result: any;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

public addFaq(){
      this.adminService.addFaq(this.faq).subscribe((data) => {
      this.result = data;
      console.log(JSON.stringify(this.result));
      if (this.result.faqId != null) {
        alert("The FAQ is Added Successfully!!");
      } else {
        alert("FAQ is not Added");
      }
    });
}
}
