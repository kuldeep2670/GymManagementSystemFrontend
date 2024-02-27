import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainer } from '../Trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Trainer[]>{
    return this.http.get<Trainer[]>("http://localhost:8080/trainer/get");
  }

  add(trainer: Trainer){
    return this.http.post("http://localhost:8080/trainer/add", trainer, {responseType: 'text'})
  }

  getById(id: any):Observable<Trainer>{
    return this.http.get<Trainer>(`http://localhost:8080/trainer/get/${id}`);
  }

  deleteById(id: any){
    return this.http.delete(`http://localhost:8080/trainer/delete/${id}`,{responseType:'text'});
  }

  update(id:any, trainer: Trainer){
    return this.http.put(`http://localhost:8080/trainer/update/${id}`,trainer,{responseType:'text'} );
  }


}
