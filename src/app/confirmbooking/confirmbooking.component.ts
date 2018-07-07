import { Component, OnInit } from '@angular/core';
import { TripService } from './../trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmbooking',
  templateUrl: './confirmbooking.component.html',
  styleUrls: ['./confirmbooking.component.css']
})
export class ConfirmbookingComponent implements OnInit {
	trip;
	trip$;
	adulttotal;
	childtotal;
	grandtotal: number;

  constructor(private tripService: TripService, private router: Router) 

  { 
  	this.trip = JSON.parse(localStorage.getItem('tripdetail'));
  	console.log('from ls', this.trip);
  	this.trip$ = this.tripService.getTrip(this.trip.tripid).take(1)
    .subscribe(trip => {
      this.trip$ = trip;
      this.adulttotal = this.trip.adults * this.trip$.costadult;
      console.log(this.adulttotal);
      this.childtotal = this.trip.children * this.trip$.costchild;
      console.log(this.childtotal)
      this.grandtotal = this.adulttotal + this.childtotal;
      console.log(this.grandtotal);
      this.trip.adulttotal = this.adulttotal;
      this.trip.childtotal = this.childtotal;
      this.trip.grandtotal = this.grandtotal;

      if(!this.trip.uid)
        this.trip.uid = localStorage.getItem('uid');
    });

  }

  book(form){

  	this.trip.paymentmode = form.paymentmode;
    this.trip.datebooked = Date.now();
    this.trip.status = 'Pending confirmation';
    console.log('in book', this.trip);
    this.tripService.createBooking(this.trip).then(response => {
      console.log(response);
      this.router.navigate(['/my/trips']);
    });

  }

  ngOnInit() {
  	
  }

}
