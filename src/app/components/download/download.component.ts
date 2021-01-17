import { Component, Input, OnInit } from "@angular/core";
import { AdminService } from "src/app/services/admin.service";
import { User } from "src/app/models/user";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-download",
  templateUrl: "./download.component.html",
  styleUrls: ["./download.component.css"],
})
export class DownloadComponent implements OnInit {
  // @Input() userId: number;
  userId: number;
  user: User;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((res) => {
      this.userId = res.userId;
      console.log(res);
    });
    this.adminService.fetchProfile(this.userId).subscribe((response) => {
      //alert(JSON.stringify(response));
      this.user = response;
    });
  }
}
