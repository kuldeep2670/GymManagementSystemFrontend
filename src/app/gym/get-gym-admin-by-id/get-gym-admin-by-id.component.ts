import { Component } from '@angular/core';
import { GymAdmin } from '../../GymAdmin';
import { GymAdminServiceService } from '../gym-admin-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-gym-admin-by-id',
  templateUrl: './get-gym-admin-by-id.component.html',
  styleUrl: './get-gym-admin-by-id.component.css'
})
export class GetGymAdminByIdComponent {

  gym = new GymAdmin();

  constructor(private gymService: GymAdminServiceService){}
 

  gymIdForm = new FormGroup({
    gymID : new FormControl('',[Validators.required, Validators.min(1)])

  });

  onSubmit(){
    const ID:any = this.gymIdForm.get('gymID')?.value;
    this.gymService.getById(ID).subscribe(responseData=>{
      this.gym = responseData;
      console.log(this.gym);
    });
    
  }

  get f(){
    return this.gymIdForm.controls;
  }
}
