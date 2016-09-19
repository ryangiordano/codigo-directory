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
  employees:Employee[];
  newEmployee: Employee = new Employee();
  //add new employee
  addEmployee(){
    this._employeeService.addEmployee(this.newEmployee);
    this.newEmployee= new Employee();
  }
  getAllEmployees(){

  }
  searchEmployees(term:string): void{

  }

  ngOnInit():void {
 this._employeeService.getAllEmployees().subscribe(data=>this.employees=data);
 console.log(this.employees);
  }

}
