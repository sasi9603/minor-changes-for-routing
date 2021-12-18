import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentregService } from '../studentreg.service';
import { Studentregister } from '../studentregister';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {
  submitted=false;
  messege:"Registration successful";
  constructor(private reg:StudentregService,private router:Router) { }

  ngOnInit(): void {
  }
  register:Studentregister=new Studentregister();
  studentRegister(){
    this.submitted=true;
    this.reg.regservice(this.register).subscribe(
      data=>{
        alert(JSON.stringify(data));
        
          this.router.navigate(['/login'])
      }
    );
 
  }
}


