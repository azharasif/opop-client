import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private route: Router){}

  canActivate():boolean{
    if(localStorage.getItem('Token')){
      return true;
    }
    else{
      this.route.navigateByUrl('feed');
      return false;
    }
  }
}
