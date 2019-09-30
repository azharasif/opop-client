import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }

  createFeedback(feedback){
    console.log(feedback);
    
    return this.http.post("http://localhost:3000/feedback/add",feedback);
  }
}
