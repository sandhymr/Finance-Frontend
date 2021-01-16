import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    if (
      sessionStorage.getItem("userLoggedIn") &&
      sessionStorage.getItem("userLoggedIn") === "true"
    ) {
      return true;
    } else {
      this.router.navigate(["home"]);
    }
  }
}
