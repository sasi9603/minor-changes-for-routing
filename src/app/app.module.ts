import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NewRegisterComponent } from './new-register/new-register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormGroupDirective, FormsModule, NgForm, Validators} from '@angular/forms';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { InstituteRegisterComponent } from './institute-register/institute-register.component';
import { MinisteryLoginComponent } from './ministery-login/ministery-login.component';
import { NodalLoginComponent } from './nodal-login/nodal-login.component';
import { InstituteLoginComponent } from './institute-login/institute-login.component';
import { MinisterRegisterComponent } from './minister-register/minister-register.component';
import { HttpClientModule } from '@angular/common/http';
import { MinisterdashboardComponent } from './ministerdashboard/ministerdashboard.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';

import { InstitutedashboardComponent } from './institutedashboard/institutedashboard.component';
import { ApplyScholarShipComponent } from './apply-scholar-ship/apply-scholar-ship.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NewRegisterComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    StudentRegisterComponent,
    InstituteRegisterComponent,
    MinisteryLoginComponent,
    NodalLoginComponent,
    InstituteLoginComponent,
    MinisterRegisterComponent,
    MinisterdashboardComponent,
    StudentdashboardComponent,
  
    InstitutedashboardComponent,
       ApplyScholarShipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
