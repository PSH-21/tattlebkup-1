import { Component, OnInit } from '@angular/core';
import { TripService } from './../trip.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';


@Component({
	selector: 'app-trip',
	templateUrl: './trip.component.html',
	styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit{
	trip$;
	constructor(private tripService: TripService, private route: ActivatedRoute) { 

	}

	ngOnInit(){
		let tripid = this.route.snapshot.paramMap.get('tripid');
		this.tripService.getTrip(tripid).take(1).subscribe(trip => {
			this.trip$ = trip
			console.log(this.trip$)
		});

	}

}
