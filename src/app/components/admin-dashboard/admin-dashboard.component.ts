import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { AdminService } from "src/app/services/admin.service";
declare var $;

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"],
})
export class AdminDashboardComponent implements OnInit {
  flag: boolean = false;
  show: boolean = true;
  users: User[];
  user: User = new User();
  result: any;
  type: boolean = false;
  constructor(private adminService: AdminService) {}

  ngOnInit() {}

  viewAllNotCardHolders() {
    this.type = false;
    this.adminService.viewAllNotCardHolders().subscribe((data) => {
      if (data != null) {
        this.flag = true;
        this.users = data;
        this.show = true;
      } else {
        this.flag = false;
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
    this.adminService.viewAllCardHolders().subscribe((data) => {
      if (data != null) {
        this.flag = true;
        this.show = false;
        this.users = data;
      } else {
        this.flag = false;
        this.show = false;
      }
    });
  }

  viewCardHoldersByType() {
    this.type = true;
  }

  search() {
    this.adminService
      .viewCardHoldersByType(this.user.cardType)
      .subscribe((data) => {
        if (data != null) {
          this.flag = true;
          this.show = false;
          this.users = data;
        } else {
          this.flag = false;
          this.show = false;
        }
      });
  }
}
