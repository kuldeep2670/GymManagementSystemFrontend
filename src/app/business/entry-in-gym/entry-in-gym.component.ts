import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-entry-in-gym',
  templateUrl: './entry-in-gym.component.html',
  styleUrl: './entry-in-gym.component.css'
})
export class EntryInGymComponent {
  resultString: string = "";
  constructor(private businessService: BusinessService){}

  entryGymForm = new FormGroup({
    uid : new FormControl('',[Validators.required, Validators.min(1)])

  });

  get f(){
    return this.entryGymForm.controls;
  }

  onSubmit(){

    const ID = this.entryGymForm.get('uid')?.value;

    this.businessService.entryInGym(ID).subscribe((responseData: string)=>{
      this.resultString = responseData;
      // alert(this.resultString);
      console.log(responseData);
    })
  }
}
