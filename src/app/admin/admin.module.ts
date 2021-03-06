import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MyprofileComponent} from './myprofile/myprofile.component';
import {AboutComponent} from './about/about.component';
import {DashboardService} from '../dashboard.service';
import {ProjectsComponent} from './projects/projects.component';
import {FormsModule} from '@angular/forms';
import { TeamSizeValidatorDirective } from '../team-size-validator.directive';
import { ClientLocationStatusValidatorDirective } from '../client-location-status-validator.directive';
import { ProjectIDUniqueValidatorDirective } from '../project-idunique-validator.directive';
@NgModule({
  declarations: [
    DashboardComponent,
    MyprofileComponent,
    AboutComponent,
    ProjectsComponent,
    TeamSizeValidatorDirective,
    ClientLocationStatusValidatorDirective,
    ProjectIDUniqueValidatorDirective
  ],
  imports: [
    CommonModule, FormsModule 
  ],
  exports:[DashboardComponent,MyprofileComponent,AboutComponent,ProjectsComponent, TeamSizeValidatorDirective,
     ClientLocationStatusValidatorDirective, ProjectIDUniqueValidatorDirective],
  providers: [DashboardService]
})
export class AdminModule { }
