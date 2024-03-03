import { Component } from '@angular/core';
import { User } from '../../User';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user-by-id',
  templateUrl: './update-user-by-id.component.html',
  styleUrl: './update-user-by-id.component.css'
})
export class UpdateUserByIdComponent {
  user = new User();

  constructor(private userService: UserService){}

  userForm = new FormGroup({
    uid : new FormControl('',[Validators.required, Validators.min(1)]),
    name : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email : new FormControl('',[Validators.required, Validators.email]),
    phoneNo : new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    id : new FormControl('',[Validators.required, Validators.min(1)]),
    packageNo : new FormControl('',[Validators.required, Validators.min(1)]),
    gymID : new FormControl('',[Validators.required, Validators.min(1)])

  });

  get f(){
    return this.userForm.controls;
  }

  onSubmit(){

    const ID = this.userForm.get('uid')?.value;
    this.user.name = this.userForm.get('name')?.value;
    this.user.phoneNo = this.userForm.get('phoneNo')?.value;
    this.user.email = this.userForm.get('email')?.value;
    this.user.trainer.id = this.userForm.get('id')?.value;
    this.user.packages.packageNo = this.userForm.get('packageNo')?.value;
    this.user.gymAdmin.gymID = this.userForm.get('gymID')?.value;

    this.userService.update(ID, this.user).subscribe(responseData=>{
      console.log(responseData);
      alert(responseData);
    })
  }
}
