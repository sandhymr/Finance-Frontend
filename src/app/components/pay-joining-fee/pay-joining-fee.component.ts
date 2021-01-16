import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-pay-joining-fee",
  templateUrl: "./pay-joining-fee.component.html",
  styleUrls: ["./pay-joining-fee.component.css"],
})
export class PayJoiningFeeComponent implements OnInit {
  @Input()
  userId: number = parseInt(sessionStorage.getItem("userId"));
  cardType: string = sessionStorage.getItem("cardType");
  userName: string = sessionStorage.getItem("userName");
  result: any;
  flag: boolean = false;
  // cardType: CardType;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.checkCard();
  }

  checkCard() {
    if (this.cardType == "Gold") {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }
  payJoiningFee() {
    this.userService.payJoiningFee(this.userId).subscribe((data) => {
      this.result = data;
      if (this.result.status == "SUCCESS") {
        alert(this.result.message);
        if (this.userName != null) {
          sessionStorage.setItem(
            "registrationFee",
            this.result.registrationFee
          );
          this.router.navigate(["dashboard"]);
        } else {
          this.router.navigate(["login"]);
        }
      } else {
        alert(this.result.message);
      }
    });
  }
}
