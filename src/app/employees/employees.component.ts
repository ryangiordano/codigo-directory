import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-service.service';
import { EmployeeSearchService } from '../employee-search.service';
import { Employee  } from '../employee';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService,EmployeeSearchService]
})
export class EmployeesComponent implements OnInit {

  constructor(private _employeeService:EmployeeService,private _employeeSearchService:EmployeeSearchService )  { }
  private searchStr = new Subject<string>();
  employees:Observable<Employee[]>;

  searchEmployees(term:string): void{
    this.searchStr.next(term);
  }
  getEmployees():void{
    this.employees=this._employeeService.getEmployees();
  }
  ngOnInit():void {
    this.getEmployees();

    // this.employees = this.searchStr.debounceTime(300).distinctUntilChanged().switchMap(term=>term ? this._employeeService.searchEmployees(term)
    // : Observable.of<Employee[]>([]))
    // .catch(error => {
    //   console.log(error);
    //   return Observable.of<Employee[]>([]);
    //
    // });
  }

}
