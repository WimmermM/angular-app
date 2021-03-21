import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { environment } from './../../environments/environment';

const endpoint1 = environment.endpoint_one;
const endpoint2 = environment.endpoint_two;
const endpoint3 = environment.endpoint_three;

const header = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
  }
};

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})


export class UserProfileComponent implements OnInit {

  done = 'Loading';
  formSubmited = false;



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    forkJoin([this.http.get(endpoint1, header),
    this.http.get(endpoint2 , header),
  this.http.get(endpoint3, header)]).subscribe(response => {
      this.done = 'Loaded';
  }, err => {
    console.log(err, 'Error');
    this.done = 'Error' + err.status;
  });
  }

  eventListener($event) {
    this.formSubmited = $event;
  }

}
