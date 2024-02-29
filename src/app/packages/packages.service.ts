import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Packages } from '../Packages';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Packages[]> {
    return this.http.get<Packages[]>("http://localhost:8080/package/get");
  }

  add(packages: Packages) {
    return this.http.post("http://localhost:8080/package/add", packages, { responseType: 'text' })
  }

  getById(id: any): Observable<Packages> {
    return this.http.get<Packages>(`http://localhost:8080/package/get/${id}`);
  }

  update(id: any, packages: Packages) {
    return this.http.put(`http://localhost:8080/package/update/${id}`, packages, { responseType: 'text' })
  }

  deleteById(id: any) {
    return this.http.delete(`http://localhost:8080/package/delete/${id}`, { responseType: 'text' });
  }


}
