import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import  {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user = {
    first_name:"",
    last_name:'',
    pass:'',
    email:'',
    dob:'',
    number:'',
    country:'',
    gender:''
  }
  loginUser = {
    pass:'',
    email:''
  }
added;
message:any;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  }
  add(){
    console.log(this.user);
    this.userService.registerUser(this.user).subscribe(res =>{
      console.log("success");
      console.log(res);
      this.loginUser.email = this.user.email;
      this.loginUser.pass = this.user.pass;
      this.userService.login(this.loginUser).subscribe(res =>{
        this.added=res;
         console.log("success");
         console.log(this.added.token);
         localStorage.setItem('Token',this.added.token);
         localStorage.setItem('UserId',this.added._id);
   
         this.router.navigateByUrl("/channel/add");
   
       },err=>{
         console.log("Error");
         console.log(err);
         
         
       })
    },err =>{
      console.log("Error");
      console.log(err);
    })
  }

  login(){
    console.log(this.loginUser);
    this.userService.login(this.loginUser).subscribe(res =>{
     this.added=res;
      console.log("success");
      console.log(this.added.token);
      localStorage.setItem('Token',this.added.token);
      localStorage.setItem('UserId',this.added._id);

      this.router.navigateByUrl("/feed");

    },error=>{


      this.message = "invalid username or password" ;
     
      setTimeout(() => {
        this.message=''
      }, 2000);


      
      
    })
  }

  logout(){
    localStorage.removeItem('Token');
    localStorage.removeItem('UserId');

    
  }

  logedin():boolean{
    return !!localStorage.getItem('Token');
  }



}
