import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  private dataSource = new BehaviorSubject<{name: string, email: string, phone: string}>(null);
  currentData = this.dataSource.asObservable();

  constructor() { }

  changeData(data: {name: string, email: string, phone: string}){
    this.dataSource.next(data);
  }
}
