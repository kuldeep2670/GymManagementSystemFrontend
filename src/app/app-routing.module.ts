import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllGymAdminComponent } from './gym/get-all-gym-admin/get-all-gym-admin.component';
import { AddGymAdminComponent } from './gym/add-gym-admin/add-gym-admin.component';
import { GetGymAdminByIdComponent } from './gym/get-gym-admin-by-id/get-gym-admin-by-id.component';
import { DeleteGymAdminByIdComponent } from './gym/delete-gym-admin-by-id/delete-gym-admin-by-id.component';
import { UpdateGymAdminByIdComponent } from './gym/update-gym-admin-by-id/update-gym-admin-by-id.component';
import { GymComponent } from './gym/gym.component';

const routes: Routes = [
  {
    path:'gym',
    component:GymComponent,
    children:[
      {path:'getall', component:GetAllGymAdminComponent},
      {path:'add', component:AddGymAdminComponent},
      {path:'get', component:GetGymAdminByIdComponent},
      {path:'delete', component:DeleteGymAdminByIdComponent},
      {path:'update', component:UpdateGymAdminByIdComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
