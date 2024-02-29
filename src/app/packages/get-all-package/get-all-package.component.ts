import { Component } from '@angular/core';
import { PackagesService } from '../packages.service';

@Component({
  selector: 'app-get-all-package',
  templateUrl: './get-all-package.component.html',
  styleUrl: './get-all-package.component.css'
})
export class GetAllPackageComponent {
  packageList: any[] = [];

  constructor(private packageService: PackagesService){
    packageService.getAll().subscribe(responseData=> {
      this.packageList = responseData;
      // console.log(this.packageList);
    });
  }
}
