const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore')
require('firebase/storage');

const firebaseConfig = {
     apiKey: "AIzaSyBdxFLNc3-a-Y1dOGymquFYzWdgQZr5fiI",
     authDomain: "college-event-development.firebaseapp.com",
     projectId: "college-event-development",
     storageBucket: "college-event-development.appspot.com",
     messagingSenderId: "253716620546",
     appId: "1:253716620546:web:8daa4293a7148d345a4e1b",
     storageBucket: 'gs://learn-development-367217.appspot.com'
};
firebase.initializeApp(firebaseConfig);
module.exports = firebase;