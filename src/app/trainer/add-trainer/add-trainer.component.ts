import { Component } from '@angular/core';
import { Trainer } from '../../Trainer';
import { TrainerService } from '../trainer.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrl: './add-trainer.component.css'
})
export class AddTrainerComponent {
  trainer = new Trainer();

  constructor(private trainerService: TrainerService, private route: Router){}

  trainerForm = new FormGroup({
    trainerName : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    phoneNo : new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    specialization : new FormControl('',[Validators.required]),
    gymID : new FormControl('',[Validators.required, Validators.min(1)])

  });

  get f(){
    return this.trainerForm.controls;
  }

  onSubmit(){
    this.trainer.trainerName = this.trainerForm.get('trainerName')?.value;
    this.trainer.phoneNo = this.trainerForm.get('phoneNo')?.value;
    this.trainer.specialization = this.trainerForm.get('specialization')?.value;
    this.trainer.gymAdmin.gymID = this.trainerForm.get('gymID')?.value;
    

    this.trainerService.add(this.trainer).subscribe((result: any)=>{
      this.goToEmpList();
      console.log(result);
    });
  }

  goToEmpList(){
    this.route.navigate(['/trainer/getall']);
  }
}
