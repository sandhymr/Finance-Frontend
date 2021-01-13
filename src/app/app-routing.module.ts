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

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "products", component: ProductListComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "forgotPwd", component: ForgotPasswordComponent },
  { path: "home", component: HomeComponent },
  { path: "changePassword", component: ChangePasswordComponent },
  { path: "registrationFee", component: PayJoiningFeeComponent },
  { path: "adminDashboard", component: AdminDashboardComponent },
  { path: "buyProduct", component: EmiAndBuyComponent },
  { path: "invoice", component: InvoiceComponent },
  { path: "addFaq", component: AddFAQComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
