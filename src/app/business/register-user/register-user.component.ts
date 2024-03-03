import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../User';
import { BusinessService } from '../business.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {
  

  constructor(private businessService: BusinessService){}

  registerUserForm = new FormGroup({
    
    name : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email : new FormControl('',[Validators.required, Validators.email]),
    phoneNo : new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10)])
  
  });

  get f(){
    return this.registerUserForm.controls;
  }

  onSubmit(){

    
    const uname = this.registerUserForm.get('name')?.value;
    const uemail = this.registerUserForm.get('email')?.value;
    const uphone = this.registerUserForm.get('phoneNo')?.value;
    

    this.businessService.registerUser(uname, uemail, uphone).subscribe(responseData=>{
      console.log(responseData);
      alert(responseData);
    })
  }
}
