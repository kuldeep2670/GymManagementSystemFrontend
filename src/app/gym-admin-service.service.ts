import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GymAdmin } from './GymAdmin';

@Injectable({
  providedIn: 'root'
})
export class GymAdminServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<GymAdmin[]>{
    return this.http.get<GymAdmin[]>("http://localhost:8080/gym/getAll");
  }


  add(gym: GymAdmin){
    return this.http.post("http://localhost:8080/gym/add", gym, {responseType: 'text'});
  }

  getById(id: any):Observable<GymAdmin>{
    return this.http.get<GymAdmin>(`http://localhost:8080/gym/get/${id}`);
  }

  deleteById(id: any){
    return this.http.delete(`http://localhost:8080/gym/delete/${id}`,{responseType:'text'});
  }
  
  update(id:any, gym: GymAdmin){
    return this.http.put(`http://localhost:8080/gym/update/${id}`,gym,{responseType:'text'} );
  }



}
