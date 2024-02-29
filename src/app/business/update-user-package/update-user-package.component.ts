import { Component } from '@angular/core';
import { BusinessService } from '../business.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user-package',
  templateUrl: './update-user-package.component.html',
  styleUrl: './update-user-package.component.css'
})
export class UpdateUserPackageComponent {
  

  constructor(private businessService: BusinessService){}

  userPackageUpdateForm = new FormGroup({
    uid : new FormControl('',[Validators.required, Validators.min(1)]),
    packageNo : new FormControl('',[Validators.required, Validators.min(1)])

  });

  get f(){
    return this.userPackageUpdateForm.controls;
  }

  onSubmit(){

    const ID = this.userPackageUpdateForm.get('uid')?.value;
    
    const packageID= this.userPackageUpdateForm.get('packageNo')?.value;
    

    this.businessService.updateUserPackage(ID, packageID).subscribe(responseData=>{
      console.log(responseData);
    })
  }
}
