import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ForgotPwd } from "src/app/models/Forgotpwd";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.css"],
})
export class ForgotPasswordComponent implements OnInit {
  forgotpwd: ForgotPwd = new ForgotPwd();
  result: any;
  flag: boolean = false;
  otp: number;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  public sendOtp() {
    this.userService.verifyOtp(this.forgotpwd).subscribe((data) => {
      this.result = data;
      if (this.result.status == "SUCCESS") {
        this.flag = true;
        sessionStorage.setItem("userId", this.result.userId);
        alert(this.result.message);
        console.log(this.result.otp);
      } else {
        alert(this.result.message);
      }
    });
  }

  public verifyOtp() {
    if (this.otp == this.result.otp) {
      this.router.navigate(["changePassword"]);
    } else {
      alert("Invalid otp");
    }
  }
}
