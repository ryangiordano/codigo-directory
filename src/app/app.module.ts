import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './routing';


//app shell
import { AppComponent } from './app.component';

import { NavigationComponent } from './navigation/navigation.component';
import { CompanyComponent } from './company/company.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { TabDirectivesComponent } from './tab-directives/tab-directives.component';
import { ShowOneTrigger } from './show-one-trigger.directive';
import { ShowOneContainer } from './show-one-container.directive';
import { ShowOne } from './show-one.directive';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { CollapseOnClick } from './collapse-on-click.directive';
import { TwoWayComponent } from './two-way/two-way.component';
import { TestingComponent } from './testing/testing.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent, CompanyComponent, EmployeesComponent, EmployeeDetailsComponent, HomeComponent, TabDirectivesComponent, ShowOneTrigger, ShowOneContainer, ShowOne, CollapsibleComponent, CollapseOnClick, TwoWayComponent, TestingComponent, PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
