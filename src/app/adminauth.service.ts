import { Injectable } from '@angular/core';
import { sequenceEqual } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }
  authenticate(username:string,password:string){
    if(username == 'chandra' && password == 'chandra123'){
      sessionStorage.setItem('username',username);
      return true;
    }
    else{
      return false
    }
  }

  isUserLoggedIn(){
    console.log('User Login succesfully');
    let user = sessionStorage.getItem('username');
    return !(user==null)
  }
  logout(){
    console.log("Logout succesful")
    sessionStorage.removeItem('username');
  }
}
