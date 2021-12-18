import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

import { Ministerlogin } from '../ministerlogin';
import { MinisterloginService } from '../ministerlogin.service';
import { StudentregService } from '../studentreg.service';

@Component({
  selector: 'app-ministery-login',
  templateUrl: './ministery-login.component.html',
  styleUrls: ['./ministery-login.component.css']
})
export class MinisteryLoginComponent implements OnInit {
msg:string;
  constructor(private log:MinisterloginService,private rou:Router) { }
minister:Ministerlogin=new Ministerlogin();
  ngOnInit(): void {
  }
  loginMinister(){
    console.log(JSON.stringify(this.minister));
    this.log.login(this.minister).subscribe(
      userRecived=>{
        if(userRecived!=null){
          sessionStorage.setItem("currentMinisterEmail",userRecived.ministerEmail);
          sessionStorage.setItem("currentministerName",userRecived.ministerName);
          this.msg="";
          this.rou.navigate(['/ministerdashboard'])
        }
        else
        this.msg="invalid credentials"
      }
    );
  }
            
            
            
          
     
        
  

}
