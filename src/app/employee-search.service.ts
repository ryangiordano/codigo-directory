import { Injectable } from '@angular/core';
import { Employee } from './employee';
import{ Http,Headers,Response} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeSearchService {

  constructor(private _http:Http) { }
searchEmployees(term:string):Observable<Employee[]>{
  return this._http.get("app/data/employees.json").map((r:Response)=>r.json().data as Employee[]);
}
}
