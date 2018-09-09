const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const SENDGRID_API_KEY = functions.config().sendgrid.key

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

exports.welcomeTaddler = functions.firestore
	.document('taddlers/{taddlerId}')
	.onCreate(event => {

	const taddlerId = event.params.taddlerId;

	const db = admin.firestore()

	return db.collection('taddlers').doc(taddlerId)
			.get()
			.then(doc => {

				const user = doc.data()

				const msg = {
					to: user.details.email,
					from: 'teamtattlers@gmail.com',
					// subject: 'Welcome to Tattle', 
					// subject can be created on the template

					templateId: 'd-f6a9855fd4c0460ca94165da18c0a17a',
					// substitutionWrappers: ['{{', '}}'],
					substitutions: {
						name: user.name
						//other custom properties here
					}


				};
				
				return sgMail.send(msg)
			})
			.then(() => console.log('email sent!') )
			.catch(err => console.log(err) )
	})



// need to understand how we are tracking info on users.  
// exports.welcomeExplorer = functions.firestore
// 	.document('taddlers/')
// 	.onCreate(event => {

// 	const taddlerId = event.params.taddlerId;

// 	const db = admin.firestore()

// 	return db.collection('taddlers').doc(taddlerId)
// 			.get()
// 			.then(doc => {

// 				const user = doc.data()

// 				const msg = {
// 					to: user.details.email,
// 					from: 'teamtattlers@gmail.com',
// 					// subject: 'Welcome to Tattle', 
// 					// subject can be created on the template

// 					templateId: 'd-8b9dcfeb159045d590249f6f68896e6b',
// 					// substitutionWrappers: ['{{', '}}'],
// 					substitutions: {
// 						name: user.name
// 						//other custom properties here
// 					}


// 				};
				
// 				return sgMail.send(msg)
// 			})
// 			.then(() => console.log('email sent!') )
// 			.catch(err => console.log(err) )
// 	})

exports.bookingConfirmation = functions.firestore
	.document('bookings/{bookingId}/status/{confirmationStatus}')
	.onUpdate(event => {

	const bookingId = event.params.bookingId;

	const db = admin.firestore()

	return db.collection('bookings').doc(bookingId)
			.get()
			.then(doc => {

				const booking = doc.data()

				const msg = {
					to: booking.bookerdetails.email,
					from: 'teamtattlers@gmail.com',
					subject: 'Booking Confirmed', 
					// subject can be created on the template

					templateId: 'd-8d91f25500a345f2987c8cfbf02f22c8',
					// substitutionWrappers: ['{{', '}}'],
					substitutions: {
						name: booking.bookerdetails.name,
						tripname: booking.bookerdetails.trip.tripname,
						triptime: booking.bookerdetails.trip.tripstarttime, 
						tripdate: booking.bookerdetails.tripdate,
						taddlername: booking.bookerdetails.trip.taddlerdetails.name,
						taddleremail: booking.bookerdetails.trip.taddlerdetails.email

						//other custom properties here
					}


				};
				
				return sgMail.send(msg)
			})
			.then(() => console.log('email sent!') )
			.catch(err => console.log(err) )
	})




// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

