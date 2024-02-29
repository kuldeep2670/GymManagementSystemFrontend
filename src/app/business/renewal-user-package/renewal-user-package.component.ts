import { Component } from '@angular/core';
import { BusinessService } from '../business.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-renewal-user-package',
  templateUrl: './renewal-user-package.component.html',
  styleUrl: './renewal-user-package.component.css'
})
export class RenewalUserPackageComponent {

  resultString: string = "";
  constructor(private businessService: BusinessService){}

  userPackageRenewalForm = new FormGroup({
    uid : new FormControl('',[Validators.required, Validators.min(1)])

  });

  get f(){
    return this.userPackageRenewalForm.controls;
  }

  onSubmit(){

    const ID = this.userPackageRenewalForm.get('uid')?.value;

    this.businessService.renewal(ID).subscribe((responseData: string)=>{
      this.resultString = responseData;
      // alert(this.resultString);
      console.log(responseData);
    })
  }
}
