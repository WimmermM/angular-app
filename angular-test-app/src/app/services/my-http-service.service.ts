import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from './../../environments/environment';
import { catchError } from 'rxjs/operators';


const postEndpoint = environment.post_endpoint;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MyHttpServiceService {

  constructor(private httpClient: HttpClient) { }

  getFoo(): Observable<any> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    console.log('volam');
    return this.httpClient.get<any>('https://postman-echo.com/get?foo=bar1', {headers: header})
    .pipe(
      catchError(this.errorHandler)
    );

  }

  getFoo2(): Observable<any>  {
    const header = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    console.log('volam 2');
    return this.httpClient.get<any>('https://postman-echo.com/get?foo=bar2', {headers: header})
    .pipe(
      catchError(this.errorHandler)
    );

  }

  getFoo3(): Observable<any>{
    const header = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    console.log('volam 3');
    return this.httpClient.get<any>('https://postman-echo.com/get?foo=bar3', {headers: header}).pipe(
      catchError(this.errorHandler)
    );

  }

  errorHandler(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error);
  }

}
