import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-submitted-data',
  templateUrl: './submitted-data.component.html',
  styleUrls: ['./submitted-data.component.css']
})
export class SubmittedDataComponent implements OnInit {


  submitedForm: {name: string, email: string, phone: string};


  constructor(private data: MyDataService) {}

  ngOnInit(): void {
    this.data.currentData.subscribe(data => this.submitedForm = data);
  }

}
