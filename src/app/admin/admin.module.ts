import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MyprofileComponent} from './myprofile/myprofile.component';
import {AboutComponent} from './about/about.component';
import {DashboardService} from '../dashboard.service';
import {ProjectsComponent} from './projects/projects.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MyprofileComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DashboardComponent,MyprofileComponent,AboutComponent,ProjectsComponent],
  providers: [DashboardService]
})
export class AdminModule { }
