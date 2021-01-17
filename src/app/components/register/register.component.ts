import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/models/user";
import { SnackbarService } from "src/app/services/snackbar.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  result: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private snackbar: SnackbarService
  ) {}

  ngOnInit() {}

  register() {
    this.userService.registerUser(this.user).subscribe((data) => {
      this.result = data;
      if (this.result.status == "SUCCESS") {
        // alert(this.result.message);
        this.snackbar.success(this.result.message);
        sessionStorage.setItem("userId", this.result.userId);
        sessionStorage.setItem("cardType", this.result.cardType);
        this.router.navigate(["docUpload"]);
      } else {
        // alert(this.result.message);
        this.snackbar.failed(this.result.message);
      }
    });
  }
}
