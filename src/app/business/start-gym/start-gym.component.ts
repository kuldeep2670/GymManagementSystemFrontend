import { Component } from '@angular/core';
import { BusinessService } from '../business.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../User';

@Component({
  selector: 'app-start-gym',
  templateUrl: './start-gym.component.html',
  styleUrl: './start-gym.component.css'
})
export class StartGymComponent {


  constructor(private businessService: BusinessService){}

  startGymForm = new FormGroup({
    uid : new FormControl('',[Validators.required, Validators.min(1)]),
    id : new FormControl('',[Validators.required, Validators.min(1)]),
    packageNo : new FormControl('',[Validators.required, Validators.min(1)]),
    gymID : new FormControl('',[Validators.required, Validators.min(1)])

  });

  get f(){
    return this.startGymForm.controls;
  }

  onSubmit(){

    const ID = this.startGymForm.get('uid')?.value;
    const trainerId = this.startGymForm.get('id')?.value;
    const packageId = this.startGymForm.get('packageNo')?.value;
    const gymId = this.startGymForm.get('gymID')?.value;

    this.businessService.startGym(ID, gymId,trainerId,packageId).subscribe(responseData=>{
      console.log(responseData);
      alert(responseData);
    })
  }
}
