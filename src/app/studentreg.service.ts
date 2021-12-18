import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Studentregister } from './studentregister';
import { Minister } from './minister';
import { Institute } from './institute';
import { Studentlogin } from './studentlogin';
import { Institutelogin } from './institutelogin';

@Injectable({
  providedIn: 'root'
})
export class StudentregService {
 

  constructor(private httpClient:HttpClient) { }

  regservice(register:Studentregister):Observable<any>{
    return this.httpClient.post<Studentregister>("http://localhost:9096/student/addOrUpdatestudent",register);
  }

 

  mininsterservice(min:Minister):Observable<any>{
    return this.httpClient.post<Minister>("http://localhost:9096/minister/addOrUpdateminister",min);
  }

  instituteservice(institute:Institute):Observable<Institute>{
    return this.httpClient.post<Institute>("http://localhost:9096/institute/addOrUpdateInstitute",institute);
  }

  

  loginstudent(studentlog:Studentlogin):Observable<Studentregister>{
    return this.httpClient.post<Studentregister>("http://localhost:9096/student/login",studentlog);
   }

    logininstitute(institutelog:Institutelogin):Observable<Institute>{
      return this.httpClient.post<Institute>("http://localhost:9096/institute/login",institutelog);
    }
  }
  


