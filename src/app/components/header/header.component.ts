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
  constructor(private router: Router) {}

  ngOnInit() {
    this.navbarShow();
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(["home"]);
    alert("logout successfully!");
   
  }
  navbarShow() {
    if (sessionStorage.getItem("userId") != null) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }
}
