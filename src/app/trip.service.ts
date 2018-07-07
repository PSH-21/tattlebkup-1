import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'

@Injectable()
export class TripService {

	dburl = '/tattlers/' + localStorage.getItem('uid') + '/trips';
	uid = localStorage.getItem('uid');

	constructor(private db: AngularFireDatabase) { }

	createTrip(trip){
		//trip.uid = localStorage.getItem('uid');
		return this.db.list('/trips').push(trip);
	}

	getTrips(){
		return this.db.list('/trips', {
			query: {
				orderByChild: 'tattlerdetails/tattlerid',
				equalTo: this.uid
			}
		});
	}

	getTrip(tripid){
		return this.db.object('trips/' + tripid);
	}

	updateTrip(tripid, trip){
		return this.db.object('trips/' + tripid).update(trip);
	}

	deleteTrip(tripid){
		return this.db.object('trips/' + tripid).remove();
	}

	searchTrips(query){

		return this.db.list('/trips', {
			query: {
				orderByChild: "tripname",
				startAt: query
			}
		})
	}

	createBooking(trip){
		//console.log(trip);
		this.db.list('tattlers/' + trip.uid + '/' + 'mybookings').push(trip);
		return this.db.list('tattlers/' + trip.trip.tattlerdetails.tattlerid + '/' + 'myadminbookings').push(trip);
	}

	getMyBookings(){
		return this.db.list('tattlers/' + localStorage.getItem('uid') + '/myadminbookings');
	}


	setStatusbooking(status, bookingid, bookeduserid){
		let update = {status : status}
		alert(bookingid);
		this.db.object('tattlers/' + bookeduserid + '/mybookings/' + bookingid).update(update);
		alert(bookingid);
		return this.db.object('tattlers/' + localStorage.getItem('uid') + '/myadminbookings/' + bookingid).update(update)
	}











}
