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
  submited = false;

  @Output()
  submittedEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private data: MyDataService) {
    this.profileForm = this.formBuilder.group({
      name: ['nultestl', Validators.required],
      email: ['test', Validators.required],
      phone: ''
    });

  }


  ngOnInit(): void {
    console.log(this.f);
    this.profileForm.get('name').valueChanges.subscribe(data => {
      console.log(data, 'tttttttt');
    });
  }


  get f() { return this.profileForm.controls; }

  onSubmit() {
    console.log(this.profileForm);
    if (this.profileForm.valid) {
      this.submited = true;
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.profileForm);
      this.submited = false;
    }
    this.sendSubmitStatus();
    console.log(this.profileForm.value, 'dadasdasdsadasdasd');
    this.changeData();
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
    this.submittedEvent.emit(this.submited);
    console.log(this.submittedEvent, 'dasdasdd');
    console.log(this.submited);
  }

  changeData() {
    this.data.changeData(this.profileForm.value);
  }

}
