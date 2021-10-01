import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }

  getUsers(){
    const usersEndpoint = '/assets/users.json';

    return this.http.get(usersEndpoint);
  }
}
