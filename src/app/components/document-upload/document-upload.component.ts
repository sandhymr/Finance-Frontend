import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SnackbarService } from "src/app/services/snackbar.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-document-upload",
  templateUrl: "./document-upload.component.html",
  styleUrls: ["./document-upload.component.css"],
})
export class DocumentUploadComponent implements OnInit {
  document: Document = new Document();
  userId: any = parseInt(sessionStorage.getItem("userId"));
  userName: string = sessionStorage.getItem("userName");
  panCard: any;
  aadharCard: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private snackbar: SnackbarService
  ) {}

  ngOnInit() {
    // this.userId = sessionStorage.getItem('userId');
  }

  onPanFileChange(event) {
    this.panCard = event.target.files[0];
  }
  onAadharFileChange(event) {
    this.aadharCard = event.target.files[0];
  }
  uploadDoc() {
    let formData: FormData = new FormData();
    formData.append("userId", this.userId);
    formData.append("panCard", this.panCard);
    formData.append("aadharCard", this.aadharCard);

    this.userService.docUpload(formData).subscribe((Response) => {
      // alert(JSON.stringify(Response));
      if (Response.status == "SUCCESS") {
        // alert(Response.message);
        this.snackbar.success(Response.message);
        sessionStorage.setItem("docUpload", "1");
        if (this.userName == null) {
          this.router.navigate(["registrationFee"]);
        }
      } else {
        // alert(Response.message);
        this.snackbar.failed(Response.message);
      }
    });
  }
}
