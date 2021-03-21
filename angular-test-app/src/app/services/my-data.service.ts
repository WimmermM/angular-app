import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  private dataSource = new BehaviorSubject<any>(null);
  currentData = this.dataSource.asObservable();

  constructor() { }

  changeData(data: any){
    this.dataSource.next(data);
  }
}
