import { Component, OnInit } from '@angular/core';
import { TripService } from './../../trip.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
	selector: 'app-trip-generator-form',
	templateUrl: './trip-generator-form.component.html',
	styleUrls: ['./trip-generator-form.component.css']
})
export class TripGeneratorFormComponent{
	trip = {};
	id;
	constructor(private tripService: TripService, 
		private router: Router,
		private route: ActivatedRoute
		) { 

		this.id = this.route.snapshot.paramMap.get('id');
		if(this.id){
			this.tripService.getTrip(this.id).take(1).subscribe(trip => this.trip = trip);
			//console.log(this.trip)
		}
	}

	save(trip){
		//console.log(trip);
		if(this.id) this.tripService.updateTrip(this.id, trip);
		else this.tripService.createTrip(trip);
		
		this.router.navigate(['/tattler/trips']);
	}



}
