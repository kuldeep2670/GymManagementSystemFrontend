import { Component } from '@angular/core';
import { GymAdminServiceService } from '../../gym-admin-service.service';

@Component({
  selector: 'app-get-all-gym-admin',
  templateUrl: './get-all-gym-admin.component.html',
  styleUrl: './get-all-gym-admin.component.css'
})
export class GetAllGymAdminComponent {

  gymList: any[] = [];

  constructor(private gymService: GymAdminServiceService){
    gymService.getAll().subscribe(responseData=> this.gymList = responseData);
  }
}
