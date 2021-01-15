import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { User } from "src/app/models/user";
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  // @Input() userId: number;
  userId: number = 100021;
  user: User;
 
  constructor(private adminService: AdminService) { }
 
  ngOnInit(): void {
    this.adminService.fetchProfile(this.userId).subscribe(response => {
      //alert(JSON.stringify(response));
      this.user = response;
    })
  }
}
