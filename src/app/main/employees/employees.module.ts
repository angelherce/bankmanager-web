import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesHomeComponent } from './employees-home/employees-home.component';


@NgModule({
  declarations: [EmployeesHomeComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
