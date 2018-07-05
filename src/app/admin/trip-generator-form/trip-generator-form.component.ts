import { Component, OnInit } from '@angular/core';
import { TripService } from './../../trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-generator-form',
  templateUrl: './trip-generator-form.component.html',
  styleUrls: ['./trip-generator-form.component.css']
})
export class TripGeneratorFormComponent{

  constructor(private tripService: TripService, private router: Router) { }

  save(trip){
  	console.log(trip);
  	this.tripService.create(trip);
  	this.router.navigate(['/tattler/trips']);
  }
 
}
