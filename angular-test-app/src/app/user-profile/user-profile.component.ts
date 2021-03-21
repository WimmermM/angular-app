import { concatMap, tap } from 'rxjs/operators';
import { MyHttpServiceService } from './../services/my-http-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})


export class UserProfileComponent implements OnInit {

  done = 'Loading';
  formSubmited = false;
  response: any;



  constructor(private http: HttpClient, private httpService: MyHttpServiceService) { }

  ngOnInit(): void {
    this.httpService.getFoo().pipe(
      tap(response => {console.log('1 endpoint done'); }),
      concatMap(response => this.httpService.getFoo2()), tap(response => {console.log('2 endpoint done'); }),
      concatMap(response => this.httpService.getFoo3()), tap(response => {console.log('3 endpoint done'); })
    ).subscribe(response => {
      this.done = 'Loaded';
    }, error => {
      console.log(error, 'Error');
      this.done = 'Error';
      });
  }

  eventListener($event) {
    this.formSubmited = $event;

  }

}
