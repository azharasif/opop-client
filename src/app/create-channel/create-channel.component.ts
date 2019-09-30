import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../channel.service';

import  {Router} from '@angular/router';


@Component({
  selector: 'app-create-channel',
  templateUrl: './create-channel.component.html',
  styleUrls: ['./create-channel.component.scss']
})
export class CreateChannelComponent implements OnInit {

  constructor(private channelService:ChannelService, private router:Router) { }
  channel= {
  channel_name:'',
  userId:''
  }

  ngOnInit() {
    this.channel.userId=localStorage.getItem("UserId");
  }
  
  create(){

    console.log(this.channel.channel_name);
    this.channelService.registerChannel(this.channel).subscribe(res =>{
      console.log("success");
      console.log(res);
   
         this.router.navigateByUrl("/feed");
   
       },err=>{
         console.log("Error");
         console.log(err);
         
         
       })

  }
}
