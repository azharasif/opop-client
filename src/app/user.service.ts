import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  registerUser(user){
    return this.http.post("http://localhost:3000/user/add",user);
  }

  login(user){
    return this.http.post("http://localhost:3000/user/login",user);
  }
  updateUser(user,id){
    return this.http.put("http://localhost:3000/user/"+id,user);

  }

  getUser(id){
    return this.http.get('http://localhost:3000/user/'+id);
  }
}
