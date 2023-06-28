import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

const api_url = "https://localhost:3000/";

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http: HttpClient, private router: Router) { }

    /** create httpOptions to create headers to send on API */
    private httpOptions() {
      let token = localStorage.getItem('token');
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `jwt ${token}`
        })
      };
      return httpOptions;
    }

  /**register service fro user */
  public register(data: any) {
    const url = api_url + "register"
    return this.http.post<any>(url, data, this.httpOptions())
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
