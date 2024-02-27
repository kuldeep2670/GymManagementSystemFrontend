import { Component } from '@angular/core';
import { GymAdmin } from '../../GymAdmin';
import { GymAdminServiceService } from '../gym-admin-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-gym-admin',
  templateUrl: './add-gym-admin.component.html',
  styleUrl: './add-gym-admin.component.css'
})
export class AddGymAdminComponent {

  gym = new GymAdmin();

  constructor(private gymService: GymAdminServiceService, private route: Router){}

  gymForm = new FormGroup({
    name : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    location : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)])

  });

  get f(){
    return this.gymForm.controls;
  }

  onSubmit(){
    this.gym.name = this.gymForm.get('name')?.value;
    this.gym.location = this.gymForm.get('location')?.value;

    this.gymService.add(this.gym).subscribe((result: any)=>{
      this.goToEmpList();
      console.log(result);
    });
  }

  goToEmpList(){
    this.route.navigate(['/gym/getall']);
  }
}
