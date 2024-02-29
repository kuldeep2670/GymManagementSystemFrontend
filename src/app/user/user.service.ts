import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8080/user/getAll");
  }

  add(user: User){
    return this.http.post("http://localhost:8080/user/add", user, {responseType: 'text'})
  }

  getById(id: any):Observable<User>{
    return this.http.get<User>(`http://localhost:8080/user/getDetailsOfUser/${id}`);
  }

  deleteById(id: any){
    return this.http.delete(`http://localhost:8080/user/delete/${id}`,{responseType:'text'});
  }

  update(id:any, user: User){
    return this.http.put(`http://localhost:8080/user/update/${id}`,user,{responseType:'text'} );
  }
}
