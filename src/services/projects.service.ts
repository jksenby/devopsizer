import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  public getAllProjects() {
    const headers = new HttpHeaders()
    return this.http.get(environment.host + '/projects', { withCredentials: true });
  }
}