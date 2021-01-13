import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/models/user";
import { AdminService } from "src/app/services/admin.service";
declare var $;

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"],
})
export class AdminDashboardComponent implements OnInit {
  adminName = sessionStorage.getItem("userName");
  flag: boolean = false; //viewall
  show: boolean = true; //generatecardbtn
  users: User[];
  user: User = new User();
  result: any;
  type: boolean = false; //searchform
  addproduct: boolean = false; //getaddproduct
  allproduct: boolean = false; //viewallproducts
  addFAQ: boolean = false; //addFaq
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit() {}

  viewAllNotCardHolders() {
    this.type = false;
    this.allproduct = false;
    this.addproduct = false;
    this.addFAQ = false;
    this.adminService.viewAllNotCardHolders().subscribe((data) => {
      if (data != null) {
        this.flag = true;
        this.users = data;
        this.show = true;
      } else {
        this.flag = false;
        alert("No records found");
      }
    });
  }

  viewUser(user: User) {
    this.user = JSON.parse(JSON.stringify(user));
    $("#userModal").modal("show");
  }

  generateCard(userId: number) {
    this.adminService.generateCard(userId).subscribe((data) => {
      this.result = data;
      if (this.result.status == "SUCCESS") {
        alert(this.result.message);
      } else {
        alert(this.result.message);
      }
    });
  }

  viewAllCardHolders() {
    this.type = false;
    this.addproduct = false;
    this.allproduct = false;
    this.addFAQ = false;
    this.show = false;
    this.adminService.viewAllCardHolders().subscribe((data) => {
      if (data != null) {
        this.flag = true;

        this.users = data;
      } else {
        this.flag = false;
      }
    });
  }

  viewCardHoldersByType() {
    this.type = true;
    this.flag = false;
    this.allproduct = false;
    this.addproduct = false;
    this.addFAQ = false;
  }

  search() {
    this.show = false;
    this.addproduct = false;
    this.allproduct = false;
    this.addFAQ = false;
    this.adminService
      .viewCardHoldersByType(this.user.cardType)
      .subscribe((data) => {
        if (data != null) {
          this.flag = true;
          this.users = data;
        } else {
          this.flag = false;
        }
      });
  }

  addProduct() {
    this.flag = false;
    this.type = false;
    this.allproduct = false;
    this.addproduct = true;
    this.addFAQ = false;
  }

  addFaq() {
    this.flag = false;
    this.type = false;
    this.allproduct = false;
    this.addproduct = false;
    this.addFAQ = true;
  }

  allProducts() {
    this.flag = false;
    this.type = false;
    this.allproduct = true;
    this.addproduct = false;
    this.addFAQ = false;
  }

  logout() {
    // sessionStorage.removeItem("userId");
    // sessionStorage.removeItem("userName");
    sessionStorage.clear();
    this.router.navigate(["login"]);
  }
}
