import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {

  }

  setLoggedInFlag(value: boolean): void {
    this.authService.setLoggedIn(value);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.setLoggedIn(true);
      this.router.navigateByUrl('');
      console.log('validni');
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
