import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth: AuthService) { 
  }

  login() { 
    this.auth.login();
  }

  

  logout(){
  	this.auth.logout().then(response => {
  		console.log(response);
  	});
  }
}
