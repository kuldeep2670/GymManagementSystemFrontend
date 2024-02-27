import { Component } from '@angular/core';
import { Trainer } from '../../Trainer';
import { TrainerService } from '../trainer.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-trainer-by-id',
  templateUrl: './get-trainer-by-id.component.html',
  styleUrl: './get-trainer-by-id.component.css'
})
export class GetTrainerByIdComponent {

  trainer = new Trainer();

  constructor(private trainerService: TrainerService){}
 

  trainerIdForm = new FormGroup({
    id : new FormControl('',[Validators.required, Validators.min(1)])

  });

  onSubmit(){
    const ID:any = this.trainerIdForm.get('id')?.value;
    this.trainerService.getById(ID).subscribe(responseData=>{
      this.trainer = responseData;
      console.log(this.trainer);
    });
    
  }

  get f(){
    return this.trainerIdForm.controls;
  }
}
