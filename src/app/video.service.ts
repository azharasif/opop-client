import { Injectable } from '@angular/core';

import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { Key } from 'protractor';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VideoService {


  constructor(private http:HttpClient) { 
    
  }

  searchTrend(query):Observable<any>{

    let params = new HttpParams().set('q',query);
    return this.http.get("http://localhost:3000/video/search" ,{params} )

  }

  
  getVideos(){
    return this.http.get("http://localhost:3000/video");

  }

  getVideoByUserId(userid){
    return this.http.get("http://localhost:3000/video/user/" + userid);
  }

  saveVideo(video){
    return this.http.post("http://localhost:3000/video/save/" , video);
    
  }

  addVideo(vid){
    return this.http.post("http://localhost:3000/video/add/" , vid);
  }

}