import { Component } from '@angular/core';
import { GymAdmin } from '../../GymAdmin';
import { GymAdminServiceService } from '../gym-admin-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-gym-admin-by-id',
  templateUrl: './update-gym-admin-by-id.component.html',
  styleUrl: './update-gym-admin-by-id.component.css'
})
export class UpdateGymAdminByIdComponent {
  gym = new GymAdmin();

  constructor(private gymService: GymAdminServiceService){}

  gymForm = new FormGroup({
    gymID: new FormControl('',[Validators.required, Validators.min(1)]),
    name : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    location : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)])

  });

  get f(){
    return this.gymForm.controls;
  }

  onSubmit(){

    const ID = this.gymForm.get('gymID')?.value;
    this.gym.name = this.gymForm.get('name')?.value;
    this.gym.location = this.gymForm.get('location')?.value;

    this.gymService.update(ID, this.gym).subscribe(responseData=>{
      console.log(responseData);
    })
  }

  

}
