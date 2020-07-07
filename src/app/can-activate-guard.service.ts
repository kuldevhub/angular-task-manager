import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import {Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuardService implements CanActivate{

  constructor(private loginService: LoginService, private router: Router, private jwtHelperService: JwtHelperService) 
  { 

  }
  canActivate(route: ActivatedRouteSnapshot): boolean
  {
    console.log(this.router.url);
    var token = sessionStorage.getItem("currentUser")?JSON.parse(sessionStorage.getItem("currentUser")).token:null;
    if(this.loginService.isAuthenticated && this.jwtHelperService.decodeToken(token).roles.includes(route.data.expectedRole))
    {
      return true; // user can navigate to particular route
    }
    else
    {
      sessionStorage.removeItem("currentUser");
      this.router.navigate(["login"]);

      return false; // user can't navigate to particular route
    }
  }
}
