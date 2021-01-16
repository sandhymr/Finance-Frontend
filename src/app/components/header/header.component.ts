import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  userName: string = sessionStorage.getItem("userName");
  flag: boolean = false;
  show: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {
    this.navbarShow();
  }

  logout() {
    sessionStorage.clear();
    alert("logout successfully!");
    this.router.navigate(["home"]);
  }
  navbarShow() {
    if (sessionStorage.getItem("userId") != null) {
      this.flag = true;
    } else {
      this.flag = false;
    }
    // if (parseInt(sessionStorage.getItem("docUpload")) == 1) {
    //   this.show = false;
    // } else {
    //   this.show = true;
    // }
  }
}
