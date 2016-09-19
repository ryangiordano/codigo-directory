import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { TestingComponent } from './testing/testing.component';

const appRoutes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'company',
    component: CompanyComponent
  },
  {
    path:'employees',
    component: EmployeesComponent
  },
  {
    path:'employee/:id',
    component: EmployeeDetailsComponent
  },
  {
    path:'testing',
    component: TestingComponent
  }
]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
