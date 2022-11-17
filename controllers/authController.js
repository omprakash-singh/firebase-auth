const firebase = require('../config');
const db = firebase.firestore();
const auth = firebase.auth();

exports.postUser = async (req, res) => {
     try {
          const email = req.body.email;
          const password = req.body.password;
          auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
               // Signed in
               var user = userCredential.user;
               console.log(user);
               const data = req.body;
               db.collection("users").add(data).then((doc) => {
                    res.status(201).send(doc.id)
               }).catch((error) => {
                    res.status(401).send(error.message);
               });

          }).catch((error) => {
               var errorCode = error.code;
               var errorMessage = error.message;
               console.log(errorMessage);
          });

     } catch (error) {
          res.status(401).send(error.message);
     }
}



exports.loginUser = async (req, res) => {
     try {
          const data = req.body;
          auth.signInWithEmailAndPassword(data.email, data.password).then((userCredential) => {
               var user = userCredential.user;
               res.status(200).json({
                    message: 'success',
                    user: user
               })
          }).catch((error) => {
               res.status(404).json({
                    message: 'fail',
                    error: error.message
               })
          });
     } catch (error) {
          res.status(404).json({
               message: 'Something is proplem',
               error: error.message
          })
     }
}


exports.checkLogin = async (req, res) => {
     // check login or not
     const user = auth.currentUser;
     if (user) {
          res.json({
               message: "User in login",
               user: user
          });
     } else {
          res.json({
               message: "user is not login"
          })
     }
}

exports.verifyEmail = async (req, res) => {

     try {
          const user = auth.currentUser;
          if (user) {
               auth.currentUser.sendEmailVerification().then(() => {
                    res.json({
                         message: "verification link is send please verify your email.."
                    })
               });

          } else {
               res.json({
                    message: "login your account.."
               })
          }

     } catch (error) {
          res.status(404).json({
               message: "some problem occur.."
          })
     }

}

exports.logout = (req, res) => {

     try {
          const user = auth.currentUser;
          if (user) {
               auth.signOut().then(() => {
                    // Sign-out successfull
                    res.json({
                         message: "Sign-out successfull"
                    })
               }).catch((error) => {
                    // An error happened.
                    res.json({
                         message: "An error happened...",
                         error: error.message
                    })
               });
          } else {
               res.json({
                    message: "please login user.."
               });
          }

     } catch (error) {
          res.status(404).json({
               message: "something is problem..",
               error: error.message
          })
     }

}

exports.getData = (req, res) => {
     try {
          const users = db.collection("users").doc("0egKjLEsq2Rc1rZpB10E");

          users.get().then((doc) => {
               console.log(doc);
               if (doc.exists) {
                    console.log("Document data:", doc.data());
                    res.json({
                         message: "success",
                         data: doc.data()
                    });
               } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");

                    res.json({
                         message: "No such document!"
                    })
               }
          }).catch((error) => {
               console.log("Error getting document:", error);
          });
     } catch (error) {
          res.json({
               message: "Something is error..",
               error: error.message
          })
     }
}

// exports.fileUpload = async (req, res) => {
//      try {
//           var storage = firebase.app().storage();
//           var storageRef = storage.ref();
//           var ref = storageRef.child('profile/');
//           const file = "om.png";
//           ref.put(file).then((snapshot) => {
//                console.log('Uploaded a blob or file!');
//           });


//      } catch (error) {
//           res.json({
//                message: "Something is problem..",
//                error: error.message
//           })
//      }
// }