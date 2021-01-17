import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Login } from "src/app/models/login";
import { User } from "src/app/models/user";
import { SnackbarService } from "src/app/services/snackbar.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  log: Login = new Login();
  result: any;
  fee: number = 0;

  constructor(
    private userService: UserService,
    private router: Router,
    private snackbar: SnackbarService
  ) {}

  ngOnInit() {}
  public login() {
    this.userService.userLogin(this.log).subscribe((data) => {
      this.result = data;
      if (this.result.status == "SUCCESS") {
        // alert(this.result.message);
        // this.snackbar.success(this.result.message);
        sessionStorage.setItem("userId", this.result.userId);
        sessionStorage.setItem("userName", this.result.userName);
        sessionStorage.setItem("userLoggedIn", "true");
        sessionStorage.setItem("cardType", this.result.cardType);
        sessionStorage.setItem("docUpload", this.result.docUpload);
        sessionStorage.setItem("registrationFee", this.result.registrationFee);
        this.fee = parseInt(sessionStorage.getItem("registrationFee"));
        if (this.fee == 0) {
          this.router.navigate(["registrationFee"]);
        } else {
          this.router.navigate(["dashboard"]);
        }
      } else if (this.result.status == "ADMIN") {
        // alert(this.result.message);
        // this.snackbar.success(this.result.message);
        sessionStorage.setItem("userId", this.result.userId);
        sessionStorage.setItem("userName", this.result.userName);
        sessionStorage.setItem("adminLoggedIn", "true");
        sessionStorage.setItem("admin", "Admin");
        this.router.navigate(["adminDashboard"]);
      } else {
        // alert(this.result.message);
        this.snackbar.failed(this.result.message);
      }
    });
  }
}
