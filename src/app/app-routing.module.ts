import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllGymAdminComponent } from './GymComponent/get-all-gym-admin/get-all-gym-admin.component';
import { AddGymAdminComponent } from './GymComponent/add-gym-admin/add-gym-admin.component';
import { GetGymAdminByIdComponent } from './GymComponent/get-gym-admin-by-id/get-gym-admin-by-id.component';
import { DeleteGymAdminByIdComponent } from './GymComponent/delete-gym-admin-by-id/delete-gym-admin-by-id.component';
import { UpdateGymAdminByIdComponent } from './GymComponent/update-gym-admin-by-id/update-gym-admin-by-id.component';

const routes: Routes = [
  {path:"gym/getall", component:GetAllGymAdminComponent},
  {path:"gym/add", component:AddGymAdminComponent},
  {path:"gym/get", component:GetGymAdminByIdComponent},
  {path:"gym/delete", component:DeleteGymAdminByIdComponent},
  {path:"gym/update", component:UpdateGymAdminByIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
