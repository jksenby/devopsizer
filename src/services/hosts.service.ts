import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class HostsService {
  constructor(private http: HttpClient) {}

  public getHostsByProjectId(projectId: number) {
    return this.http.get(environment.host + '/projects/' + projectId + 'hosts');
  }
}