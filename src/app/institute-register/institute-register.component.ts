import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Institute } from '../institute';
import { StudentregService } from '../studentreg.service';

@Component({
  selector: 'app-institute-register',
  templateUrl: './institute-register.component.html',
  styleUrls: ['./institute-register.component.css']
})
export class InstituteRegisterComponent implements OnInit {
  submitted=false;
  constructor(private reg:StudentregService,private router:Router) { }

  ngOnInit(): void {
  }
  institute:Institute=new Institute();
  instituteRegister(){
    this.submitted=true;
    this.reg.instituteservice(this.institute).subscribe(
      data=>{
      alert(JSON.stringify(data));
        
      this.router.navigate(['/login'])
  }
    );
  }

}
