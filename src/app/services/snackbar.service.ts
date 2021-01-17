import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SnackbarService {
  constructor() {}

  failed(message: string) {
    let x: any = document.getElementById("snackbar");
    x.className = "show";
    x.innerText = message;
    setTimeout(() => {
      x.className = x.className.replace("show", "");
    }, 5000);
  }
  success(message: any) {
    let x = document.getElementById("snackbar");
    x.className = "success";
    x.innerText = message;
    setTimeout(() => {
      x.className = x.className.replace("success", "");
    }, 3000);
  }
}
