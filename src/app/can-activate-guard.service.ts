import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import {Router, CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuardService implements CanActivate{

  constructor(private loginService: LoginService, private router: Router) 
  { 

  }
  canActivate(): boolean
  {
    console.log(this.router.url);
    if(this.loginService.isAuthenticated)
    {
      return true; // user can navigate to particular route
    }
    else
    {
      this.router.navigate(["login"]);
      return false; // user can't navigate to particular route
    }
  }
}
