import { Component, OnInit } from '@angular/core';
import { VideoService } from './../video.service';
import  {Router , ActivatedRoute  } from '@angular/router';



@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})





export class FeedComponent implements OnInit {
  searched:boolean=false;
  vidio:boolean=true;
  SearchData = {
    search:''
  };
  videos :{}
  searching :{}
  trends: {}
  constructor(private videoService: VideoService,
            private router:Router , private _active: ActivatedRoute) {

              this.videoService.getVideos().subscribe( (data :any) =>{

         
                this.videos = data.videos ;
                console.log(this.videos)
                this.trends = data.trends ;
              },
              err =>{
          
                console.log(err);
              })

             }
             ngOnInit() {



            }
             
          
  mychannel(){
    this.router.navigateByUrl("/channel");

  }

  search(){



    this.searched=true;
    this.vidio=false;

this.videoService.searchTrend(this.SearchData.search).subscribe((data:any)=>{


  this.searching = data ;
  console.log(this.searching)

 
})


  }

}
