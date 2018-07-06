import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'

@Injectable()
export class TripService {

	dburl = '/tattlers/' + localStorage.getItem('uid') + '/trips';
	uid = localStorage.getItem('uid');

	constructor(private db: AngularFireDatabase) { }

	createTrip(trip){
		trip.uid = localStorage.getItem('uid');
		return this.db.list('/trips').push(trip);
	}

	getTrips(){
		return this.db.list('/trips', {
			query: {
				orderByChild: 'uid',
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

}
