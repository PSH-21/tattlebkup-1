import { Component, OnInit } from '@angular/core';
import { TripService } from './../../trip.service';

@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.css']
})
export class ManageBookingsComponent implements OnInit {
	mybookings$

  constructor(private tripService: TripService) {
  	this.mybookings$ = this.tripService.getMyBookings();
   }

   confirmbooking(bookingid, bookeduserid){
   		this.tripService.setStatusbooking('Confirmed', bookingid, bookeduserid);
   }

   rejectbooking(bookingid, bookeduserid){
   	 	this.tripService.setStatusbooking('Rejected by tattler', bookingid, bookeduserid);
   }
  ngOnInit() {
  }

}
