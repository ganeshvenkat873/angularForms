import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service:EmployeeService, public router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.service.form.value);
    this.router.navigate(['/department'])
  }
  // ToNext() =>{
  //   this.router.navigate(['department'])
  // }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
 

}
