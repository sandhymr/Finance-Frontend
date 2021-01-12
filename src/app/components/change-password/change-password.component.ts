import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ChangePwd } from "src/app/models/changepwd";
import { ForgotPwd } from "src/app/models/Forgotpwd";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"],
})
export class ChangePasswordComponent implements OnInit {
  newPswd: ChangePwd = new ChangePwd();
  confirmPswd: string;
  constructor(private userService: UserService, private router: Router) {}
  result: any;
  ngOnInit() {}

  public changePassword() {
    this.newPswd.userId = parseInt(sessionStorage.getItem("userId"));
    this.userService.changepwd(this.newPswd).subscribe((data) => {
      this.result = data;
      if (this.result.status == "SUCCESS") {
        alert(this.result.message);
        console.log(this.result.status);
        this.router.navigate(["login"]);
      } else {
        alert(this.result.message);
      }
    });
  }
}
