import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'

@Injectable()
export class TripService {

	dburl = '/tattlers/' + localStorage.getItem('uid') + '/trips';

	constructor(private db: AngularFireDatabase) { }

	create(trip){
		return this.db.list(this.dburl).push(trip);
	}

	getTrips(){
		return this.db.list(this.dburl);
	}

	deleteTrip(trip){
		return this.db.list(this.dburl).remove(trip);
	}

}
