import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrl: './get-all-users.component.css'
})
export class GetAllUsersComponent {

  userList: any[] = [];

  constructor(private userService: UserService){
    userService.getAll().subscribe(responseData=> {
      this.userList = responseData;
      // console.log(responseData);
    });
    
  }
}
