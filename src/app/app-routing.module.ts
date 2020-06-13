import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {AboutComponent} from './admin/about/about.component';
import {ProjectsComponent} from './admin/projects/projects.component';
import {LoginComponent} from './login/login.component'
import { CanActivateGuardService } from './can-activate-guard.service';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent, canActivate: [CanActivateGuardService]},
  {path:"login", component:LoginComponent},
  {path:"about",component:AboutComponent},
  {path:"projects",component:ProjectsComponent, canActivate: [CanActivateGuardService]},
  {path:"",redirectTo:"login", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
