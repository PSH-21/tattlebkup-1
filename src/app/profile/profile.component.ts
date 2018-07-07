import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	user$;
  constructor(private userService: UserService, private route: ActivatedRoute) { 
  	let uid = route.snapshot.paramMap.get('uid');
  	//this.user$ = this.userService.get(uid);
  	this.userService.get(uid).take(1).subscribe(user =>{
  		this.user$ = user;
  		console.log(user);
  	})
  }

  ngOnInit() {
  }

}