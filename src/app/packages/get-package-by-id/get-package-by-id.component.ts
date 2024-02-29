import { Component } from '@angular/core';
import { Packages } from '../../Packages';
import { PackagesService } from '../packages.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-package-by-id',
  templateUrl: './get-package-by-id.component.html',
  styleUrl: './get-package-by-id.component.css'
})
export class GetPackageByIdComponent {
  packages = new Packages();

  constructor(private packageService: PackagesService){}
 

  packageIdForm = new FormGroup({
    packageNo : new FormControl('',[Validators.required, Validators.min(1)])

  });

  onSubmit(){
    const ID:any = this.packageIdForm.get('packageNo')?.value;
    this.packageService.getById(ID).subscribe(responseData=>{
      this.packages = responseData;
      console.log(this.packages);
    });
    
  }

  get f(){
    return this.packageIdForm.controls;
  }
}
