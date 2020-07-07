import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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

  getAllProjects(): Observable<Project[]>
  {
    // var currentUser = { token: ""};
    // var headers = new HttpHeaders();
    // headers = headers.set("Authorization", "Bearer ");
    // if(sessionStorage.currentUser!=null)
    // {
    //   currentUser = JSON.parse(sessionStorage.currentUser);
    //   headers = headers.set("Authorization","Bearer "+currentUser.token)
    //   headers = headers.set("Access-Control-Allow-Origin","*")

    // }
    // alert("Project service :  Token :"+ currentUser.token + " Header Token :" + headers)
    // ,{headers: headers, responseType:"json"}
    return this.httpClient.get<Project[]>(API_URL + '/api/projects',{responseType:"json"})
    .pipe(map(
      (data: Project[]) => {
        // alert("project service response SUCCESS")
        // for(let i=0;i<data.length;i++){
        //   data[i].teamSize =  data[i].teamSize * 100;
        // }
        return data;
      },
      (error)=>{
        // alert("project service response error")
        console.log(error);
      }
    ));
  }

  getProjectByProjectId(ProjectID: number): Observable<Project>
  {
    return this.httpClient.get<Project>(API_URL + "/api/projects/"+ProjectID,{responseType: "json"});
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
