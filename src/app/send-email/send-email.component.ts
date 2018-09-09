import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
	selector: 'send-email',
	templateUrl: './send-email.component.html',
	styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
	constructor (private http: Http) {}

	ngOnInit() {

	}

	sendEmail(emailAddress, content) {

		let url = `https://us-central1-tattle-f39e3.cloudfunctions.net/httpEmail`
		let params: URLSearchParams = new URLSearchParams();
		let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

		params.set('to', emailAddress);
		// params.set('from', 'hello@angularfirebase.com');
		params.set('from', 'peter.s.hunt@gmail.com');
		params.set('content', content);

		return this.http.post(url, params, headers)
				.toPromise()
				.then( res => {
					console.log(res)
				})
				.catch(err => {
					console.log(err)
				})
	}
}