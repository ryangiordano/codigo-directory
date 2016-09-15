import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable()
export class EmployeeService{
  lastId: number = 0;
  employees: Employee[] = [];

  constructor() { }
  addEmployee(employee:Employee): EmployeeService{
    if(!employee.id){
      employee.id = ++this.lastId;
    }
    this.employees.push(employee);
    return this;
  }
  //simulate deleting employee /employees/:id
  deleteEmployeeById(id: number): EmployeeService{
    this.employees = this.employees.filter(employee=>employee.id!==id);
    return this;
  }

  //simulate put employee/:id
  updateEmployeeById(id:number, values: Object = {}): Employee{
    let employee = this.getEmployeeById(id);
    if(!employee){
      return null;
    }
    Object.assign(employee, values);
    return employee;
  }
  getAllEmployees():Employee[]{
    return this.employees;
  }
  getEmployeeById(id:number):Employee{
    return this.employees.filter(employee=>employee.id===id).pop();
  }
  
}
