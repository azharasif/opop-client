import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {

  }
  logout(){
    localStorage.removeItem('Token');
    localStorage.removeItem('UserId');
    this.route.navigateByUrl("");


    
  }
  logedin():boolean{
    return !!localStorage.getItem('Token');
  }

}
