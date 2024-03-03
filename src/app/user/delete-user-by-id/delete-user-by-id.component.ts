import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';



@Component({
  selector: 'app-delete-user-by-id',
  templateUrl: './delete-user-by-id.component.html',
  styleUrl: './delete-user-by-id.component.css'
})
export class DeleteUserByIdComponent {
  constructor(private userService: UserService, private route:Router){}

  
  userIdForm = new FormGroup({
    id : new FormControl('',[Validators.required, Validators.min(1)])

  });

  onSubmit(){
    const ID:any = this.userIdForm.get('id')?.value;
    this.userService.deleteById(ID).subscribe((responseData)=>{
    
      console.log(responseData);
      alert(responseData);
      this.goToUserList();

    })
    
  }

  goToUserList(){
    this.route.navigate(['/user/getall']);
  }

  get f(){
    return this.userIdForm.controls;
  }
}
