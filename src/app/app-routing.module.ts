import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { ChangePasswordComponent } from "./components/change-password/change-password.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { EmiAndBuyComponent } from "./components/emi-and-buy/emi-and-buy.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { PayJoiningFeeComponent } from "./components/pay-joining-fee/pay-joining-fee.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { RegisterComponent } from "./components/register/register.component";
import { InvoiceComponent } from "./components/invoice/invoice.component";
import { AddFAQComponent } from "./components/add-faq/add-faq.component";
import { DocumentUploadComponent } from "./components/document-upload/document-upload.component";
import { DownloadComponent } from "./components/download/download.component";
import { TransactioncompComponent } from "./components/transactioncomp/transactioncomp.component";
import { ProductpurchasedComponent } from "./components/productpurchased/productpurchased.component";
import { AuthGuard } from "./guards/auth.guard";
import { AdminAuthGuard } from "./guards/admin-auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "products", component: ProductListComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: "forgotPwd", component: ForgotPasswordComponent },
  { path: "home", component: HomeComponent },
  { path: "changePassword", component: ChangePasswordComponent },
  { path: "registrationFee", component: PayJoiningFeeComponent },
  {
    path: "adminDashboard",
    component: AdminDashboardComponent,
    canActivate: [AdminAuthGuard, AuthGuard],
  },
  {
    path: "buyProduct",
    component: EmiAndBuyComponent,
    canActivate: [AuthGuard],
  },
  { path: "invoice", component: InvoiceComponent, canActivate: [AuthGuard] },
  {
    path: "addFaq",
    component: AddFAQComponent,
    canActivate: [AdminAuthGuard, AuthGuard],
  },
  { path: "docUpload", component: DocumentUploadComponent },
  {
    path: "download",
    component: DownloadComponent,
    canActivate: [AuthGuard, AdminAuthGuard],
  },
  {
    path: "viewAllTransactions",
    component: TransactioncompComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "productsPurchased",
    component: ProductpurchasedComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
