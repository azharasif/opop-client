import { Component, OnInit } from '@angular/core';
import { ChannelService } from './../channel.service';
import  {Router} from '@angular/router';



@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  videos_list:{}
  videos :{}
  channel_name:any
  id;
  constructor(private channelService: ChannelService,
    private router:Router) {
   }

  ngOnInit() {
    this.id = localStorage.getItem('UserId');
    // console.log(this.id)
    this.channelService.getChannelByUserId(this.id).subscribe(res=>{

      console.log(res[0].channel_name)
     this.videos = res[0].videos_list;
  
    })
  }

  settings(){
    this.router.navigateByUrl("channel/settings");
  }

}
