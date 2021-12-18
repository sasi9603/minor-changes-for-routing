import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {

  constructor() { }
  UserName:string;
  ngOnInit(): void {
    this.UserName=sessionStorage.getItem("currentstudentName")
  }

}
