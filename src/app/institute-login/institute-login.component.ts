import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Institutelogin } from '../institutelogin';
import { StudentregService } from '../studentreg.service';

@Component({
  selector: 'app-institute-login',
  templateUrl: './institute-login.component.html',
  styleUrls: ['./institute-login.component.css']
})
export class InstituteLoginComponent implements OnInit {
msg:string;
institute:any;

  constructor(private reg:StudentregService,private router:Router) { }
  institutelog:any = new Institutelogin();
  ngOnInit(): void {}
    institutelogin1(){
      console.log(JSON.stringify(this.institutelog));
      this.reg.logininstitute(this.institutelog).subscribe(
        userRecived=>{
          if(userRecived!=null){
            sessionStorage.setItem("currentinstituteEmail",userRecived.instituteEmail);
            sessionStorage.setItem("currentinstituteName",userRecived.instituteName);
            this.msg="";
            this.router.navigate(['/institutedashboard'])
          }
          else
          this.msg="invalid credentials"
        }
      );
    }
}

