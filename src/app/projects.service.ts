import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from './project';
import { environment } from '../environments/environment';
import {map} from 'rxjs/operators';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient:HttpClient) { }

  getAllProjects(): Observable<Project[]>{
    return this.httpClient.get<Project[]>(API_URL + '/api/projects',{responseType:"json"})
    .pipe(map(
      (data: Project[]) => {
        for(let i=0;i<data.length;i++){
          data[i].teamSize =  data[i].teamSize * 100;
        }
        return data;
      }
    ));
  }
  insertProject(newProject: Project):Observable<Project>{
    return this.httpClient.post<Project>(API_URL + "/api/projects",newProject,{responseType:"json"})
  }
  updateProject(existingProject: Project):Observable<Project>{
    return this.httpClient.put<Project>(API_URL + "/api/projects",existingProject,{responseType:"json"});
  }
  deleteProject(projectID: number):Observable<String>{
    return this.httpClient.delete<string>(API_URL + "/api/projects/" +projectID);
  }

  searchProjects(searchBy:string,searchText:string):Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(API_URL + "/api/projects/"+searchBy+"/"+searchText,{responseType:"json"});
  }
}
