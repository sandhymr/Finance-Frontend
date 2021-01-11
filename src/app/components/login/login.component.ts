import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Login } from "src/app/models/login";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  log: Login = new Login();
  result: any;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}
  public login() {
    this.userService.userLogin(this.log).subscribe((data) => {
      this.result = data;
      if (this.result.status == "SUCCESS") {
        alert(this.result.message);
        this.router.navigate(["home"]);
      } else {
        alert(this.result.message);
      }
    });
  }
}
