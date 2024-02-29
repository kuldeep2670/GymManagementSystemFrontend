import { Component } from '@angular/core';
import { Packages } from '../../Packages';
import { PackagesService } from '../packages.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-package-by-id',
  templateUrl: './update-package-by-id.component.html',
  styleUrl: './update-package-by-id.component.css'
})
export class UpdatePackageByIdComponent {

  packages = new Packages();

  constructor(private packageService: PackagesService){}

  packageForm = new FormGroup({
    packageNo : new FormControl('',[Validators.required, Validators.min(1)]),
    packageName : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    packageFees : new FormControl('',[Validators.required, Validators.min(999)]),
    mealIncluded: new FormControl(false)

  });

  get f(){
    return this.packageForm.controls;
  }

  onSubmit(){

    const ID = this.packageForm.get('packageNo')?.value;
    this.packages.packageName = this.packageForm.get('packageName')?.value;
    this.packages.packageFees = this.packageForm.get('packageFees')?.value;
    this.packages.mealIncluded = !!this.packageForm.get('mealIncluded')?.value;
    

    this.packageService.update(ID, this.packages).subscribe(responseData=>{
      console.log(responseData);
    })
  }

}
