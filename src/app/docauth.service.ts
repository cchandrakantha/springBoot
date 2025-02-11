import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username:string,password:string){
    if(username=="kanth"&&password=="kanth123"){
      sessionStorage.setItem('username',username);
      return true;
    }
    else
    {
      return false;
    }
  }

  isUserLoggedIn(){
    console.log("Doctor Login")
    let user = sessionStorage.getItem('username');
    return !(user==null)
  }

  logout(){
    console.log("Doctor logout")
    sessionStorage.removeItem('username')
  }
  
}
