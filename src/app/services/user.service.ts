import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  login (data: Object) {
    return this.http.post(`${this.API_URL}login`, data);
  }

  getLoginUser () {
    return this.http.post(`${this.API_URL}user`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    });
  }

  register (data: Object) {
    return this.http.post(`${this.API_URL}register`, data);
  }

  allUsers (data: Object) {
    return this.http.get(`${this.API_URL}users/all`);
  }

  getUser (id: string) {
    return this.http.get(`${this.API_URL}users/get/${id}`);
  }

  updateUser (data: Object, id: string) {
    return this.http.put(`${this.API_URL}users/update/${id}`, data);
  }

  deleteUser (id: string) {
    return this.http.delete(`${this.API_URL}users/delete/${id}`);
  }
}
