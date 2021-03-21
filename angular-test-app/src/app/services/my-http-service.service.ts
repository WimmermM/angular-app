import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';


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

postData(data: string): Observable<string> {
  return this.httpClient.post<string>(postEndpoint , data , httpOptions);
}
}
