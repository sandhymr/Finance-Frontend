import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  flag:boolean=false;
  cardchecker:string=sessionStorage.getItem("cardType");
  userName = sessionStorage.getItem("userName");
  constructor(private userService:UserService) {}
  cardTypebool:boolean=true;
  userId:number=parseInt(sessionStorage.getItem("userId"));
  ngOnInit() {
    this.checkCard();
  }
  totalCredit:number;
  result:any;
  validityTill:string;
  checkCard() {
    if (this.cardchecker == "Gold") {
      this.cardTypebool = true;
    } if(this.cardchecker == "Titanium") {
      this.cardTypebool = false;
    }
    this.userService.getCardById(this.userId).subscribe(
      data => {
        //this.card.cardId=data.cardId;
        
        if (data == null) {
          console.log("Invalid Card");
          
        } else {
          console.log(JSON.stringify(data));
          this.result=data;
          this.totalCredit=this.result.totalCredit;
          this.flag=this.result.user.cardStatus;
          this.validityTill=this.result.validity.toString();
        }
      }
    );
  }
}
