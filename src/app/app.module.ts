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
import { HomeComponent } from './components/home/home.component';
import { PayJoiningFeeComponent } from './components/pay-joining-fee/pay-joining-fee.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
