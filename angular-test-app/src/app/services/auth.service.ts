import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() {}

  private isLoggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  setLoggedIn(value:boolean): void  {
    this.isLoggedIn = value;
    localStorage.setItem('loggedIn' , 'true');
  }

  getLoggedIn(): string {
    return JSON.parse(localStorage.getItem('loggedIn') || this.isLoggedIn);
  }
}
