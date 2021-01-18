import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/models/user";
import { AdminService } from "src/app/services/admin.service";
import { ProductService } from "src/app/services/product.service";
import { SnackbarService } from "src/app/services/snackbar.service";
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
  countOfNewUsers:number=0;
  countOfProducts:number=0;
  countOfGoldUsers:number=0;
  countOfTitaniumUsers:number=0;
  adminDash:boolean=true;//for admin dashboard

  constructor(
    private adminService: AdminService,
    private router: Router,
    private snackbar: SnackbarService,
    private productService:ProductService
  ) {}

  ngOnInit() {
    this.forAdminDashboard();
  }

  viewAllNotCardHolders() {
    this.type = false;
    this.allproduct = false;
    this.addproduct = false;
    this.addFAQ = false;
    this.adminDash = false;
    this.adminService.viewAllNotCardHolders().subscribe((data) => {
      if (data.length != 0) {
        this.flag = true;
        this.users = data;
        this.show = true;
      } else {
        this.flag = false;
        // alert("No records found");
        this.snackbar.failed("No records found");
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
        // alert(this.result.message);
        this.snackbar.success(this.result.message);
      } else {
        // alert(this.result.message);.
        this.snackbar.failed(this.result.message);
      }
    });
  }
  
  viewAllCardHolders() {
    this.type = false;
    this.addproduct = false;
    this.allproduct = false;
    this.addFAQ = false;
    this.show = false;
    this.adminDash = false;
    this.adminService.viewAllCardHolders().subscribe((data) => {
      if (data.length != 0) {
        this.flag = true;
        this.users = data;
      } else {
        this.flag = false;
        this.snackbar.failed("No records found");
      }
    });
  }

  viewCardHoldersByType() {
    this.type = true;
    this.flag = false;
    this.allproduct = false;
    this.addproduct = false;
    this.addFAQ = false;
    this.adminDash = false;
  }

  search() {
    this.show = false;
    this.addproduct = false;
    this.allproduct = false;
    this.addFAQ = false;
    this.adminDash = false;
    this.adminService
      .viewCardHoldersByType(this.user.cardType)
      .subscribe((data) => {
        if (data.length != 0) {
          this.flag = true;
          this.users = data;
        } else {
          this.flag = false;
          this.snackbar.failed("No records found");
        }
      });
  }

  addProduct() {
    this.flag = false;
    this.type = false;
    this.allproduct = false;
    this.addproduct = true;
    this.addFAQ = false;
    this.adminDash = false;
  }

  addFaq() {
    this.flag = false;
    this.type = false;
    this.allproduct = false;
    this.addproduct = false;
    this.addFAQ = true;
    this.adminDash = false;
  }

  allProducts() {
    this.flag = false;
    this.type = false;
    this.allproduct = true;
    this.addFAQ = false;
    this.addproduct = false;
    this.adminDash = false;
  }

  logout() {
    // sessionStorage.removeItem("userId");
    // sessionStorage.removeItem("userName");
    sessionStorage.clear();
    this.router.navigate(["login"]);
  }

  goldTypeUsers:User[];
  titaniumTypeUsers:User[];
  public forAdminDashboard(){
    this.flag = false;
    this.type = false;
    this.allproduct = false;
    this.addFAQ = false;
    this.addproduct = false;
    this.adminDash = true;

    this.productService.viewAllProducts().subscribe((data) => {
      if (data != null) {
        this.countOfProducts=data.length;
      } 
    });

    this.adminService.viewAllNotCardHolders().subscribe((data) => {
      if (data.length != 0) {
        this.countOfNewUsers=data.length;
      }
    });

    this.adminService
      .viewCardHoldersByType("Gold")
      .subscribe((data) => {
        if (data.length != 0) {
          this.countOfGoldUsers=data.length;
        } 
      });

      this.adminService
      .viewCardHoldersByType("Titanium")
      .subscribe((data) => {
        if (data.length != 0) {
          this.countOfTitaniumUsers=data.length;
        } 
      });
  }
  public viewCardType(cardType:string){
    if(cardType=="Gold"){
      this.user.cardType="Gold";
      this.search();
    }else{
      this.user.cardType="Titanium";
      this.search();
    }
  }
}
