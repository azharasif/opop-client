import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http:HttpClient) { }

  registerChannel(channel){ 
    return this.http.post("http://localhost:3000/channel/add",channel);
  }
  getUserChannel(userId){
    return this.http.get("http://localhost:3000/channel/user/"+userId);

  }
  getChannelByUserId(userid){
    return this.http.get("http://localhost:3000/channel/user/" + userid);
  }
  addVideoInChannel(data){
    return this.http.post("http://localhost:3000/channel/video/add" ,data);
  }
}

