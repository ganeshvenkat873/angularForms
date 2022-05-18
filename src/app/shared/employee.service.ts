import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    FirstName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    PhoneNumber : new FormControl('', [Validators.required, Validators.minLength(10)]),
    EmployeeId : new FormControl('', Validators.required)
  })

  
  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      FirstName: '',
      LastName: '',
      email: '',
      PhoneNumber: '',
      EmployeeId: ''
    });
}}
