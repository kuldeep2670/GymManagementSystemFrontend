import { Component } from '@angular/core';
import { User } from '../../User';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-user-by-id',
  templateUrl: './get-user-by-id.component.html',
  styleUrl: './get-user-by-id.component.css'
})
export class GetUserByIdComponent {
  user = new User();

  constructor(private userService: UserService){}
 

  userIdForm = new FormGroup({
    id : new FormControl('',[Validators.required, Validators.min(1)])

  });

  onSubmit(){
    const ID:any = this.userIdForm.get('id')?.value;
    this.userService.getById(ID).subscribe(responseData=>{
      this.user = responseData;
      console.log(this.user);
    });
    
  }

  get f(){
    return this.userIdForm.controls;
  }
}
