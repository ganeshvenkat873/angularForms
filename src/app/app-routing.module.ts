import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employees/employee/employee.component';

const routes: Routes = [
  {path: 'employee' , component:EmployeeComponent},
  {path:'department', component: DepartmentComponent},
  {path: '', redirectTo:'/employee', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
