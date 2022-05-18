import { Component, OnInit } from '@angular/core';
import {DepartmentService} from  'src/app/shared/department.service'
import { Router } from '@angular/router';
// interface department {
//   value: string;
//   viewValue: string;
// }
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})

export class DepartmentComponent implements OnInit {
  //  selectedValue: string;
  // selectedDepartment: string
  

  // departments: department[] = [
  //   {value: 'Tech-0', viewValue: 'Tech'},
  //   {value: 'Design-1', viewValue: 'Design'},
  //   {value: 'Bpo-2', viewValue: 'Bpo'},
  // ];
  constructor(public service:DepartmentService, public router:Router) { }
  
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.service.form.value);
  }
}
