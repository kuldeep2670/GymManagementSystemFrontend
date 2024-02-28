import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllGymAdminComponent } from './gym/get-all-gym-admin/get-all-gym-admin.component';
import { AddGymAdminComponent } from './gym/add-gym-admin/add-gym-admin.component';
import { GetGymAdminByIdComponent } from './gym/get-gym-admin-by-id/get-gym-admin-by-id.component';
import { DeleteGymAdminByIdComponent } from './gym/delete-gym-admin-by-id/delete-gym-admin-by-id.component';
import { UpdateGymAdminByIdComponent } from './gym/update-gym-admin-by-id/update-gym-admin-by-id.component';
import { GymComponent } from './gym/gym.component';
import { TrainerComponent } from './trainer/trainer.component';
import { GetAllTrainerComponent } from './trainer/get-all-trainer/get-all-trainer.component';
import { AddTrainerComponent } from './trainer/add-trainer/add-trainer.component';
import { GetTrainerByIdComponent } from './trainer/get-trainer-by-id/get-trainer-by-id.component';
import { DeleteTrainerByIDComponent } from './trainer/delete-trainer-by-id/delete-trainer-by-id.component';
import { UpdateTrainerByIdComponent } from './trainer/update-trainer-by-id/update-trainer-by-id.component';
import { PackagesComponent } from './packages/packages.component';
import { GetAllPackageComponent } from './packages/get-all-package/get-all-package.component';

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
  },
  {
    path:'trainer',
    component:TrainerComponent,
    children:[
      {path:'getall', component:GetAllTrainerComponent},
      {path:'add', component:AddTrainerComponent},
      {path:'get', component:GetTrainerByIdComponent},
      {path:'delete', component:DeleteTrainerByIDComponent},
      {path:'update',component:UpdateTrainerByIdComponent}
    ]
  },
  {
    path:'package',
    component:PackagesComponent,
    children:[
      {path:'getall',component:GetAllPackageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
