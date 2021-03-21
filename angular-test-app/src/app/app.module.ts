import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SubmittedDataComponent } from './submitted-data/submitted-data.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    SubmittedDataComponent,
    UserProfileComponent,
    ProfileFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
