import { Component } from '@angular/core';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-get-all-trainer',
  templateUrl: './get-all-trainer.component.html',
  styleUrl: './get-all-trainer.component.css'
})
export class GetAllTrainerComponent {

  trainerList: any[] = [];

  constructor(private trainerService: TrainerService){
    trainerService.getAll().subscribe(responseData=> this.trainerList = responseData);
  }
}
