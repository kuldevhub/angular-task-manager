import { Injectable } from '@angular/core';
import { HttpClientModule, HttpBackend } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { LoginViewModel } from './login-view-model';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpClient: HttpClient;
// , private router: Router
  constructor(private httpBackEnd:HttpBackend, private jwtHelperService: JwtHelperService)
  {

   }

   currentUserName:string = null;

   public Login(loginViewModel: LoginViewModel): Observable<any>
   {
    //  alert("login");
     this.httpClient = new HttpClient(this.httpBackEnd)

    return this.httpClient.post<any>(API_URL + '/authWithJWT',loginViewModel,{responseType:"json"})
    .pipe(map(user => {
      if(user)
      {
        // alert("success :"+  user.userName);
        this.currentUserName = user.userName;
        sessionStorage.currentUser = JSON.stringify(user);
        // alert("sessionStorage.currentUser :"+sessionStorage.currentUser)
      }
      // alert("Login :"+  sessionStorage.currentUser.userName+"Token :"+sessionStorage.currentUser.token);
      return user;
    }))
   }

   public Logout()
   {
    // alert(" Log out current user :"+   this.currentUserName);
    sessionStorage.removeItem("currentUser");
     this.currentUserName = null;
     // this.router.navigateByUrl('/dashboard');
   }
   public isAuthenticated(): boolean
   {
    var token = sessionStorage.getItem("currentUser")? JSON.parse(sessionStorage.getItem("currentUser")).token: null;
    if(this.jwtHelperService.isTokenExpired())
    {
      sessionStorage.removeItem("currentUser");
      this.currentUserName = null;
      return false;
    }
    else{
      return true;
    }
   }
}
