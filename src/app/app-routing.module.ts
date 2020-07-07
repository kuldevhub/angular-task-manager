import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {AboutComponent} from './admin/about/about.component';
import {ProjectsComponent} from './admin/projects/projects.component';
import {LoginComponent} from './login/login.component'
import { CanActivateGuardService } from './can-activate-guard.service';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent, canActivate: [CanActivateGuardService],
  data:{expectedRole: "ROLE_ADMIN"}},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignUpComponent},
  {path:"about",component:AboutComponent},
  {path:"projects",component:ProjectsComponent, canActivate: [CanActivateGuardService],
  data:{expectedRole: "ROLE_ADMIN"}},
  {path:"",redirectTo:"login", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
