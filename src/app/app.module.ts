import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetAllGymAdminComponent } from './GymComponent/get-all-gym-admin/get-all-gym-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { AddGymAdminComponent } from './GymComponent/add-gym-admin/add-gym-admin.component';
import { GetGymAdminByIdComponent } from './GymComponent/get-gym-admin-by-id/get-gym-admin-by-id.component';
import { DeleteGymAdminByIdComponent } from './GymComponent/delete-gym-admin-by-id/delete-gym-admin-by-id.component';
import { UpdateGymAdminByIdComponent } from './GymComponent/update-gym-admin-by-id/update-gym-admin-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    GetAllGymAdminComponent,
    AddGymAdminComponent,
    GetGymAdminByIdComponent,
    DeleteGymAdminByIdComponent,
    UpdateGymAdminByIdComponent
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
