import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
 
@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent implements OnInit {
  document:Document=new Document();
  userId: any;
  panCard: any;
  aadharCard:any;
 
  constructor(private userService: UserService) { }
 
  ngOnInit() {
    // this.userId = sessionStorage.getItem('userId');
    this.userId = 100021
  }
 
  onPanFileChange(event) {
    this.panCard = event.target.files[0];
  }
   onAadharFileChange(event) {
    this.aadharCard=event.target.files[0];
  }
  uploadDoc() {
    let formData: FormData = new FormData();
    formData.append('userId', this.userId);
    formData.append('panCard', this.panCard);
    formData.append('aadharCard',this.aadharCard);
 
    this.userService.docUpload(formData).subscribe(Response => {
      alert(JSON.stringify(Response));
    });
  }
 
}