import { Component } from '@angular/core';
import { GymAdminServiceService } from '../gym-admin-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-gym-admin-by-id',
  templateUrl: './delete-gym-admin-by-id.component.html',
  styleUrl: './delete-gym-admin-by-id.component.css'
})
export class DeleteGymAdminByIdComponent {

  constructor(private gymService: GymAdminServiceService, private route:Router){}

  
  gymIdForm = new FormGroup({
    gymID : new FormControl('',[Validators.required, Validators.min(1)])

  });

  onSubmit(){
    const ID:any = this.gymIdForm.get('gymID')?.value;
    this.gymService.deleteById(ID).subscribe((responseData)=>{
    
      console.log(responseData);
      this.goToEmpList();

    })
    
  }

  goToEmpList(){
    this.route.navigate(['/gym/getall']);
  }

  get f(){
    return this.gymIdForm.controls;
  }
}
