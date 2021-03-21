import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-submitted-data',
  templateUrl: './submitted-data.component.html',
  styleUrls: ['./submitted-data.component.css']
})
export class SubmittedDataComponent implements OnInit {

  testGrp: FormGroup;
  name: string;
  email: string;
  phone: number;

  constructor(private data: MyDataService) {
    console.log('sdadasd mifdingodfn ndifn');

   }

  ngOnInit(): void {
    console.log(this.data.currentData , 'data v submitu');
    console.log('sdadasd mifdingodfn ndifn');

  }

}
