import { Component } from '@angular/core';
import { Trainer } from '../../Trainer';
import { TrainerService } from '../trainer.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-trainer-by-id',
  templateUrl: './update-trainer-by-id.component.html',
  styleUrl: './update-trainer-by-id.component.css'
})
export class UpdateTrainerByIdComponent {

  trainer = new Trainer();

  constructor(private trainerService: TrainerService){}

  trainerForm = new FormGroup({
    id : new FormControl('',[Validators.required, Validators.min(1)]),
    trainerName : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    phoneNo : new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    specialization : new FormControl('',[Validators.required]),
    gymID : new FormControl('',[Validators.required, Validators.min(1)])

  });

  get f(){
    return this.trainerForm.controls;
  }

  onSubmit(){

    const ID = this.trainerForm.get('id')?.value;
    this.trainer.trainerName = this.trainerForm.get('trainerName')?.value;
    this.trainer.phoneNo = this.trainerForm.get('phoneNo')?.value;
    this.trainer.specialization = this.trainerForm.get('specialization')?.value;
    this.trainer.gymAdmin.gymID = this.trainerForm.get('gymID')?.value;

    this.trainerService.update(ID, this.trainer).subscribe(responseData=>{
      console.log(responseData);
    })
  }


}
