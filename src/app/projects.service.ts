import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from './project';
import { environment } from '../environments/environment';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient:HttpClient) { }

  getAllProjects(): Observable<Project[]>{
    return this.httpClient.get<Project[]>(API_URL + '/api/projects');
  }
  insertProject(newProject: Project):Observable<Project>{
    return this.httpClient.post<Project>(API_URL + "/api/projects",newProject)
  }
  updateProject(existingProject: Project):Observable<Project>{
    return this.httpClient.put<Project>(API_URL + "/api/projects",existingProject)
  }
}
