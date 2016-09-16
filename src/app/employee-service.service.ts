import { Injectable } from '@angular/core';
import { Employee } from './employee';
import{ Http,Headers,Response} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService{
  lastId: number = 0;
  employees: Employee[] = [];
  dataUrl:string = "https://codigo-directory.firebaseio.com/employees";
  private searchUrl: string;
  constructor(private _http:Http) { }
  // addEmployee(employee:Employee): EmployeeService{
  //   if(!employee.id){
  //     employee.id = ++this.lastId;
  //   }
  //   this.employees.push(employee);
  //   return this;
  // }
  // //simulate deleting employee /employees/:id
  // deleteEmployeeById(id: number): EmployeeService{
  //   this.employees = this.employees.filter(employee=>employee.id!==id);
  //   return this;
  // }
  //
  // //simulate put employee/:id
  // updateEmployeeById(id:number, values: Object = {}): Employee{
  //   let employee = this.getEmployeeById(id);
  //   if(!employee){
  //     return null;
  //   }
  //   Object.assign(employee, values);
  //   return employee;
  // }
  // getAllEmployees():Employee[]{
  //   return this.employees;
  // }
  // getEmployeeById(id:number):Employee{
  //   return this.employees.filter(employee=>employee.id===id).pop();
  // }
  // searchEmployees(str:string){
  //   // this.searchUrl = '../data/employees.json';
  //   return this._http.get(this.dataUrl).map((res:Response)=>res.json);
  //
  // }

  addEmployee(){
    const body = JSON.stringify({firstName: 'firstName', lastName:'lastName'});
    return this._http.put('https://codigo-directory.firebaseio.com/employees/employee.json',body).map(response=>response.json());
  }
  getEmployees(){
    return this._http.get('https://codigo-directory.firebaseio.com/employees/employee.json').map(response=>response.json());
  }
}
