import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient) { }

  registerUser(name:any, email: any, phone: any){
    return this.http.post(`http://localhost:8080/business/registerUser/${name}/${email}/${phone}`,null,{responseType:'text'} );
  }

  startGym(ID:any, gymID:any, trainerID:any, packageID:any){
    return this.http.post(`http://localhost:8080/business/startGym/${ID}/${gymID}/${trainerID}/${packageID}`,null, {responseType:'text'});
  }

  updateUserPackage(ID: any, packageID:any){
    return this.http.post(`http://localhost:8080/business/updateUserPackage/${ID}/${packageID}`,null, {responseType:'text'});
  }

  renewal(ID:any){
    return this.http.get(`http://localhost:8080/business/renewal/${ID}`,{responseType:'text'});
  }

  entryInGym(ID:any){
    return this.http.get(`http://localhost:8080/business/entryInGym/${ID}`,{responseType:'text'});
  }
}
