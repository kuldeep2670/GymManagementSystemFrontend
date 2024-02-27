import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetAllGymAdminComponent } from './GymComponent/get-all-gym-admin/get-all-gym-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { AddGymAdminComponent } from './GymComponent/add-gym-admin/add-gym-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    GetAllGymAdminComponent,
    AddGymAdminComponent
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
