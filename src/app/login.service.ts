import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { LoginViewModel } from './login-view-model';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient)
  {
   }

   currentUserName:string = null;

   public Login(loginViewModel: LoginViewModel): Observable<any>
   {
    return this.httpClient.post<any>(API_URL + '/api/authenticate',loginViewModel,{responseType:"json"})
    .pipe(map(user => {
      if(user)
      {
        this.currentUserName = user.userName;
      }
      return user;
    }))
   }

   public Logout()
   {
     this.currentUserName = null;
   }
}
