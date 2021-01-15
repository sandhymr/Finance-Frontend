import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { EligibilityComponent } from "./components/eligibility/eligibility.component";
import { TermsAndConditionsComponent } from "./components/terms-and-conditions/terms-and-conditions.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { ChangePasswordComponent } from "./components/change-password/change-password.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./components/home/home.component";
import { PayJoiningFeeComponent } from "./components/pay-joining-fee/pay-joining-fee.component";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { EmiAndBuyComponent } from "./components/emi-and-buy/emi-and-buy.component";
import { InvoiceComponent } from "./components/invoice/invoice.component";
import { AddFAQComponent } from "./components/add-faq/add-faq.component";
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
import { DownloadComponent } from './components/download/download.component';
import { TransactioncompComponent } from './components/transactioncomp/transactioncomp.component';
import { ProductpurchasedComponent } from './components/productpurchased/productpurchased.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EligibilityComponent,
    TermsAndConditionsComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    ProductListComponent,
    ProductDetailsComponent,
    DashboardComponent,
    HomeComponent,
    PayJoiningFeeComponent,
    AdminDashboardComponent,
    UserDetailsComponent,
    AddProductComponent,
    EmiAndBuyComponent,
    InvoiceComponent,
    AddFAQComponent,
    DocumentUploadComponent,
    DownloadComponent,
    TransactioncompComponent,
    ProductpurchasedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
