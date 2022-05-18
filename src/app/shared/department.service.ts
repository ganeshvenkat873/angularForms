import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
 
  constructor() { }
  form: FormGroup = new FormGroup({
   
    department: new FormControl('', Validators.required),
    ProjectName: new FormControl('', Validators.required),
    Role : new FormControl('', Validators.required)
    
  })
}
