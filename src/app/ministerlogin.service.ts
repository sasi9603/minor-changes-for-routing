import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Minister } from './minister';
import { Ministerlogin } from './ministerlogin';


@Injectable({
  providedIn: 'root'
})
export class MinisterloginService {

  constructor(private httpClient:HttpClient) { }

  login(minister:Ministerlogin):Observable<Minister>{
    return this.httpClient.post<Minister>("http://localhost:9096/minister/login",minister)
  }
}
