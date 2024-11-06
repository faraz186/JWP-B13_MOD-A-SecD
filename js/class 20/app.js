const firebaseConfig = {
  apiKey: "AIzaSyDbBxA9XbagwrgWGoB7OmXvMQdHqGHzJZo",
  authDomain: "fir-auth-aa688.firebaseapp.com",
  databaseURL: "https://fir-auth-aa688-default-rtdb.firebaseio.com",
  projectId: "fir-auth-aa688",
  storageBucket: "fir-auth-aa688.firebasestorage.app",
  messagingSenderId: "967347999633",
  appId: "1:967347999633:web:1daefd6ea43513983a0030",
};

var app = firebase.initializeApp(firebaseConfig);

function signUp() {
  try {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log(name, email, password);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  } catch (error) {
    console.log(error);
  }
}



function Login() {
  try {
    var email = document.getElementById("Loginemail").value;
    var password = document.getElementById("Loginpassword").value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  } catch (error) {
    console.log(error);
  }
}

// ----------------------------Local Storage-------------------------------

var obj = {
  name: "abc",
  status: false,
  email: "abc@gmail.com",
};

localStorage.clear();

localStorage.setItem(
  "biodata",

  JSON.stringify(obj)
);

localStorage.setItem("name", "faraz");

localStorage.setItem("age", "24");

var getValue = localStorage.getItem("biodata");

console.log(JSON.parse(getValue));

// local Storage Methods

// setItem() // data save in local storage

// getItem() // data get in console

// removeItem() // delete single key along with value

// clear() // delete all data from local storage


// Firebase Database

// CRUD Operation

function saveData() {
  try {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var userObj = {
      name,
      email,
      password,
    };

    // data save on DB

    // set method

    firebase.database().ref("users").set(userObj);

    // push method

    firebase.database().ref("users").push(userObj);

  } catch (error) {
    console.log(error);
  }
}

function deleteAll() {
  try {
    firebase.database().ref("users/-OAx0B2l4QtuFCKB33hS").remove();
  } catch (error) {
    console.log(error);
  }
}

function editData() {
  try {
    firebase.database().ref("users/-OAx1IUcYZgd6dYwH-b0").set({
      email: "faraz10@gmail.com",
      name: "faraz",
      password: "123456",
    });
  } catch (error) {
    console.log(error);
  }
}

// get data from DB

// once() method

// on() method

function getData() {
  try {
    firebase
      .database()
      .ref("users")
      .on("child_added", function (data) {
        console.log(data.val());
      });
  } catch (error) {
    console.log(error);
  }
}

getData();
