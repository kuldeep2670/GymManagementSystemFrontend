import { Component } from '@angular/core';
import { PackagesService } from '../packages.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-package-by-id',
  templateUrl: './delete-package-by-id.component.html',
  styleUrl: './delete-package-by-id.component.css'
})
export class DeletePackageByIdComponent {
  
  constructor(private packageService: PackagesService, private route:Router){}

  packageIdForm = new FormGroup({
    packageNo : new FormControl('',[Validators.required, Validators.min(1)])

  });

  onSubmit(){
    const ID:any = this.packageIdForm.get('packageNo')?.value;
    this.packageService.deleteById(ID).subscribe((responseData)=>{
    
      console.log(responseData);
      alert(responseData);
      this.goToPackageList();

    })
    
  }

  goToPackageList(){
    this.route.navigate(['/package/getall']);
  }

  get f(){
    return this.packageIdForm.controls;
  }
}
