import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import  {Router} from '@angular/router';




@Component({
  selector: 'app-channel-settings',
  templateUrl: './channel-settings.component.html',
  styleUrls: ['./channel-settings.component.scss']
})
export class ChannelSettingsComponent implements OnInit {

  user = {
    first_name:"",
    last_name:'',
    pass:'',
    email:'',
    number:''
  }
  data;
  passCheck=false;
  buttonClicked =false;
  changePass = {
    email:'',
    pass:''
  }
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('UserId')).subscribe(res=>{
      this.data=res;
      this.user.first_name = this.data.first_name;
      this.user.last_name = this.data.last_name;
      this.user.email = this.data.email;
      this.changePass.email =  this.data.email;
      this.user.number = this.data.number;
      console.log(this.user);
      
    },err => {
      console.log(err);
    })
  }
  comparePass(){
    this.buttonClicked = true;
    this.userService.login(this.changePass).subscribe(res =>{
      this.passCheck = true;
       console.log("success");
     },err=>{
       console.log("Error");
       this.passCheck = false;
     })
  }
  edit(monkey){
   if(monkey === null) 
   {  
    this.data.first_name=this.user.first_name;
    this.data.last_name=this.user.last_name; 
    this.data.email=this.user.email;
    this.data.number=this.user.number;    
   }
   else{
    this.data.pass=this.user.pass;
   }
    console.log(this.user);
    this.userService.updateUser(this.data,localStorage.getItem('UserId')).subscribe(res=>{
      console.log(res);
      this.router.navigateByUrl('/channel');
    })
    
  }

}

