import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { Studentlogin } from '../studentlogin';
import { StudentregService } from '../studentreg.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string;
  constructor(private student:StudentregService,private rou:Router) { }
  studentlog:Studentlogin=new Studentlogin();
  ngOnInit(): void {
  }
  studentlogin1(){
    console.log(JSON.stringify(this.studentlog));
    this.student.loginstudent(this.studentlog).subscribe(
      userRecived=>{
        if(userRecived!=null){
          sessionStorage.setItem("currentstudentEmail",userRecived.emailId);
          sessionStorage.setItem("currentstudentName",userRecived.studentName);
          this.msg="";
          this.rou.navigate(['/studentdashboard'])
        }
        else
        this.msg="invalid credentials"
      }
    );
  }
}
