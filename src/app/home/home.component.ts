import { Component } from '@angular/core';
import { GymAdminServiceService } from '../gym/gym-admin-service.service';
import { PackagesService } from '../packages/packages.service';
import { TrainerService } from '../trainer/trainer.service';
import { UserService } from '../user/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  totalGyms: number = 0;
  totalTrainers: number = 0;
  totalPackages: number = 0;
  packageList: any[] = [];
  totalUsers: number = 0;


  constructor(private gymService: GymAdminServiceService, private trainerService: TrainerService, private packageService: PackagesService, private userService: UserService) {
    gymService.getAll().subscribe(responseData => {
      this.totalGyms = responseData.length;
    });

    trainerService.getAll().subscribe(responseData => this.totalTrainers = responseData.length);

    packageService.getAll().subscribe(responseData=> {
      this.totalPackages = responseData.length;
      this.packageList = responseData;
    });

    userService.getAll().subscribe(responseData=> {
      this.totalUsers = responseData.length;
    });
  }
}
