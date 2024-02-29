import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetAllGymAdminComponent } from './gym/get-all-gym-admin/get-all-gym-admin.component';
import { HttpClientModule } from '@angular/common/http';
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
import { AddPackageComponent } from './packages/add-package/add-package.component';
import { GetPackageByIdComponent } from './packages/get-package-by-id/get-package-by-id.component';
import { UpdatePackageByIdComponent } from './packages/update-package-by-id/update-package-by-id.component';
import { DeletePackageByIdComponent } from './packages/delete-package-by-id/delete-package-by-id.component';
import { UserComponent } from './user/user.component';
import { GetAllUsersComponent } from './user/get-all-users/get-all-users.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { GetUserByIdComponent } from './user/get-user-by-id/get-user-by-id.component';
import { UpdateUserByIdComponent } from './user/update-user-by-id/update-user-by-id.component';
import { DeleteUserByIdComponent } from './user/delete-user-by-id/delete-user-by-id.component';
import { BusinessComponent } from './business/business.component';
import { RegisterUserComponent } from './business/register-user/register-user.component';
import { StartGymComponent } from './business/start-gym/start-gym.component';
import { UpdateUserPackageComponent } from './business/update-user-package/update-user-package.component';
import { RenewalUserPackageComponent } from './business/renewal-user-package/renewal-user-package.component';
import { EntryInGymComponent } from './business/entry-in-gym/entry-in-gym.component';

@NgModule({
  declarations: [
    AppComponent,
    GetAllGymAdminComponent,
    AddGymAdminComponent,
    GetGymAdminByIdComponent,
    DeleteGymAdminByIdComponent,
    UpdateGymAdminByIdComponent,
    GymComponent,
    TrainerComponent,
    GetAllTrainerComponent,
    AddTrainerComponent,
    GetTrainerByIdComponent,
    DeleteTrainerByIDComponent,
    UpdateTrainerByIdComponent,
    PackagesComponent,
    GetAllPackageComponent,
    AddPackageComponent,
    GetPackageByIdComponent,
    UpdatePackageByIdComponent,
    DeletePackageByIdComponent,
    UserComponent,
    GetAllUsersComponent,
    AddUserComponent,
    GetUserByIdComponent,
    UpdateUserByIdComponent,
    DeleteUserByIdComponent,
    BusinessComponent,
    RegisterUserComponent,
    StartGymComponent,
    UpdateUserPackageComponent,
    RenewalUserPackageComponent,
    EntryInGymComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
