import { FocusTrapManager } from '@angular/cdk/a11y/focus-trap/focus-trap-manager';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Minister } from '../minister';
import { StudentregService } from '../studentreg.service';

@Component({
  selector: 'app-minister-register',
  templateUrl: './minister-register.component.html',
  styleUrls: ['./minister-register.component.css']
})
export class MinisterRegisterComponent implements OnInit {
  submitted=false;
  constructor(private reg:StudentregService,private rou:Router) { }

  ngOnInit(): void {
  }

  min:Minister=new Minister();
  ministerRegister(){
    this.submitted=true;
    this.reg.mininsterservice(this.min).subscribe(
      data=>{
        alert(JSON.stringify(data));
        if(data.ministerEmail!=null){
          this.rou.navigate(['/ministery-login'])
        }
      }
      
    );
    
    console.log(this.min);

  }

}
