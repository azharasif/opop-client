import { Component, OnInit } from '@angular/core';
import  {Router} from '@angular/router';
import { FeedbackService } from '../feedback.service';



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
message:any;
  feedbackData = {
    feedback_name:'',
    comments:''
  };
  constructor(private feedbackService:FeedbackService,private router:Router) { }



  ngOnInit() {
    console.log(this.feedbackData.feedback_name);
    console.log(this.feedbackData.comments)
  }



  feedback(){

    console.log(this.feedbackData.comments);
    this.feedbackService.createFeedback(this.feedbackData).subscribe(res =>{
    this.feedbackData.comments ='';
    this.feedbackData.feedback_name=''
    
    
    this.message="thank you for feedback" ;
      setTimeout(() => {
        this.message="";
      }, 4000);
  
    this.router.navigateByUrl("/feedback");
  })
}

}