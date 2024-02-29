import { Component } from '@angular/core';
import { Packages } from '../../Packages';
import { PackagesService } from '../packages.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrl: './add-package.component.css'
})
export class AddPackageComponent {
  packages = new Packages();

  constructor(private packageService: PackagesService, private route: Router){}

  packageForm = new FormGroup({
    packageName : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    packageFees : new FormControl('',[Validators.required, Validators.min(999)]),
    mealIncluded: new FormControl(false)

  });

  get f(){
    return this.packageForm.controls;
  }

  onSubmit(){
    this.packages.packageName = this.packageForm.get('packageName')?.value;
    this.packages.packageFees = this.packageForm.get('packageFees')?.value;
    this.packages.mealIncluded = !!this.packageForm.get('mealIncluded')?.value;

    this.packageService.add(this.packages).subscribe((result: any)=>{
      this.goToPackageList();
      console.log(result);
    });
  }

  goToPackageList(){
    this.route.navigate(['/package/getall']);
  }
}
