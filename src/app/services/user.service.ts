import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ChangePwd } from "../models/changepwd";
import { ForgotPwd } from "../models/Forgotpwd";
import { Login } from "../models/login";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  public registerUser(user: User): Observable<any> {
    return this.http.post<any>("http://localhost:8181/register", user);
  }

  public userLogin(log: Login): Observable<any> {
    return this.http.post<any>("http://localhost:8181/login", log);
  }

  public verifyOtp(forgotpwd: ForgotPwd): Observable<any> {
    return this.http.post<any>("http://localhost:8181/verifyUser", forgotpwd);
  }

  public payJoiningFee(userId: number): Observable<any> {
    return this.http.get<any>(
      "http://localhost:8181/payJoiningFee?userId=" + userId
    );
  }
  public changepwd(changepwd: ChangePwd): Observable<any> {
    return this.http.post<any>(
      "http://localhost:8181/changePassword",
      changepwd
    );
  }
  public getCardById(userId:number): Observable<any>{
    return this.http.get<any>('http://localhost:8181/findCardbyUserId?userId='+userId);
  }
}
