var firebaseConfig = {
  apiKey: "AIzaSyDbBxA9XbagwrgWGoB7OmXvMQdHqGHzJZo",
  authDomain: "fir-auth-aa688.firebaseapp.com",
  projectId: "fir-auth-aa688",
  storageBucket: "fir-auth-aa688.firebasestorage.app",
  messagingSenderId: "967347999633",
  appId: "1:967347999633:web:1daefd6ea43513983a0030",
};

var app = firebase.initializeApp(firebaseConfig);

var auth = firebase.auth();

function signUp() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}

function Login() {
  var email = document.getElementById("Loginemail");
  var password = document.getElementById("Loginpassword");

  auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      window.location.href = "./Home.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}
