import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrl: './doclogin.component.css'
})
export class DocloginComponent {
  username:string="";
  password:string="";

  constructor(private router:Router,private docauth:DocauthService){}
  inValidLogin = false;
  checkLogin(){
    if(this.docauth.authenticate(this.username,this.password)){
      this.router.navigate(['docdash'])
      this.inValidLogin = false;
    }
    else{
      this.inValidLogin=true;
      alert("Invalid");
      this.router.navigate(['home'])
    }
  }
}
