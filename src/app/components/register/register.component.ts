import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  result: any;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  register() {
    this.userService.registerUser(this.user).subscribe((data) => {
      this.result = data;
      if (this.result.status == "SUCCESS") {
        alert(this.result.message);
        sessionStorage.setItem("userId", this.result.userId);
        sessionStorage.setItem("cardType", this.result.cardType);
        this.router.navigate(["registrationFee"]);
      } else {
        alert(this.result.message);
      }
    });
  }
}
