import { Component, OnInit } from '@angular/core';
import { TripService } from './../../trip.service'

@Component({
	selector: 'app-admin-products',
	templateUrl: './admin-products.component.html',
	styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

	trips$;
	constructor(private tripService: TripService) { 
		this.trips$ = tripService.getTrips();
	}

	ngOnInit() {
	}

	deleteTrip(trip){
		this.tripService.deleteTrip(trip);
	}

}
