import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ministerdashboard',
  templateUrl: './ministerdashboard.component.html',
  styleUrls: ['./ministerdashboard.component.css']
})
export class MinisterdashboardComponent implements OnInit {
username:string;
  constructor() { }

  ngOnInit(): void {
    this.username=sessionStorage.getItem("currentministerName");
  }
  

}
