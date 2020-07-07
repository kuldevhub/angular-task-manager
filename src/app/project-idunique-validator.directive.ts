import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, AsyncValidator } from '@angular/forms';
import { ProjectsService } from './projects.service';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {Project} from './project';

@Directive({
  selector: '[appProjectIDUniqueValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: ProjectIDUniqueValidatorDirective, multi: true}]
})
export class ProjectIDUniqueValidatorDirective implements AsyncValidator{

  constructor(private projectService: ProjectsService) 
  {

   }

   validate(control:AbstractControl):Observable<ValidationErrors | null>
   {
   return this.projectService.getProjectByProjectId(control.value).pipe(map ( (existingProject: Project) =>{
      if(existingProject != null)
      {
        return {uniqueProjectID:{valid: false}};
      }
      else
      {
        return null;
      }
    }));
   }

}
