import { Component } from '@angular/core';
import { TrainerService } from '../trainer.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-trainer-by-id',
  templateUrl: './delete-trainer-by-id.component.html',
  styleUrl: './delete-trainer-by-id.component.css'
})
export class DeleteTrainerByIDComponent {

  constructor(private trainerService: TrainerService, private route:Router){}

  
  trainerIdForm = new FormGroup({
    id : new FormControl('',[Validators.required, Validators.min(1)])

  });

  onSubmit(){
    const ID:any = this.trainerIdForm.get('id')?.value;
    this.trainerService.deleteById(ID).subscribe((responseData)=>{
    
      console.log(responseData);
      this.goToEmpList();

    })
    
  }

  goToEmpList(){
    this.route.navigate(['/trainer/getall']);
  }

  get f(){
    return this.trainerIdForm.controls;
  }
}
