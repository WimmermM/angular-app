import { MyDataService } from './../services/my-data.service';
import { Component, OnInit, EventEmitter , Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  profileForm: FormGroup;
  submitStatus = false;
  snedForm: {name: string, email: string, phone: string};

  @Output()
  submittedEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private data: MyDataService) {
    this.profileForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone: null
    });

  }


  ngOnInit(): void {
    this.profileForm.get('name').valueChanges.subscribe(data => {
      console.log(data, 'data');
    });
    this.data.currentData.subscribe(data => this.snedForm = data);
  }


  get f() { return this.profileForm.controls; }

  onSubmit() {
    console.log(this.profileForm);
    if (this.profileForm.valid) {
      this.submitStatus = true;
      console.log('form submitted');
      this.changeData();
    } else {
      this.validateAllFormFields(this.profileForm);
      this.submitStatus = false;
    }
    this.sendSubmitStatus();
    console.log(this.profileForm.value, 'dadasdasdsadasdasd');
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  sendSubmitStatus() {
    this.submittedEvent.emit(this.submitStatus);
  }

  changeData() {
    this.data.changeData(this.profileForm.value);
    console.log('volam ChangeData');
    console.log(this.snedForm, 'send form');
  }

  onReset() {
    this.profileForm.reset();
    this.submitStatus = false;
    this.sendSubmitStatus();
    this.data.changeData(null);
  }

}
