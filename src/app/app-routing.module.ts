import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllGymAdminComponent } from './GymComponent/get-all-gym-admin/get-all-gym-admin.component';
import { AddGymAdminComponent } from './GymComponent/add-gym-admin/add-gym-admin.component';

const routes: Routes = [
  {path:"gym/getall", component:GetAllGymAdminComponent},
  {path:"gym/add", component:AddGymAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
