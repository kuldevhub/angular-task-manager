import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientLocation } from './client-location';
import { environment } from '../environments/environment';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ClientLocationsService {

  constructor(private httpClient: HttpClient) 
  {

   }

   getClientLocations(): Observable<ClientLocation[]>
   {
    return this.httpClient.get<ClientLocation[]>(API_URL + '/api/clientlocations',{responseType:"json"});
   }
}
