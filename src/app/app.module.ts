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

@NgModule({
  declarations: [
    AppComponent,
    GetAllGymAdminComponent,
    AddGymAdminComponent,
    GetGymAdminByIdComponent,
    DeleteGymAdminByIdComponent,
    UpdateGymAdminByIdComponent,
    GymComponent
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
