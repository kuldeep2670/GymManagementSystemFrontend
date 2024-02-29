import { Component } from '@angular/core';
import { User } from '../../User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  user = new User();

  constructor(private userService: UserService, private route: Router){}

  userForm = new FormGroup({
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
    this.user.name = this.userForm.get('name')?.value;
    this.user.phoneNo = this.userForm.get('phoneNo')?.value;
    this.user.email = this.userForm.get('email')?.value;
    this.user.trainer.id = this.userForm.get('id')?.value;
    this.user.packages.packageNo = this.userForm.get('packageNo')?.value;
    this.user.gymAdmin.gymID = this.userForm.get('gymID')?.value;
    

    this.userService.add(this.user).subscribe((result: any)=>{
      this.goToUserList();
      console.log(result);
    });
  }

  goToUserList(){
    this.route.navigate(['/user/getall']);
  }
}
