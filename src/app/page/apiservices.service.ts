import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private http:HttpClient) { }
  apiurl = "https://api.npoint.io/6c9f42d9d293fba10b5c";
  homeapi(): Observable<any>
  {
    return this.http.get(`${this.apiurl}`)
  }
}
