const express = require('express');
const firebase = require('./config');
const bodyparser = require('body-parser');
const Router = require('./Routes/index');
const app = express();
// const email = 'omprakashsingh11009@gamil.com';
// const password = '789456123';
// firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
//      // Signed in
//      var user = userCredential.user;
//      // ...
//      console.log(user);
// }).catch((error) => {
//      var errorCode = error.code;
//      var errorMessage = error.message;
//      console.log(errorMessage);
// });

// firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
//      // Signed in 
//      var user = userCredential.user;
//      // ...
//      console.log(user);
// }).catch((error) => {
//      var errorCode = error.code;
//      var errorMessage = error.message;
//      // ..
//      console.log(errorMessage);
// });
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use('/', Router);



app.listen(3000, () => {
     console.log("Server start...");
})