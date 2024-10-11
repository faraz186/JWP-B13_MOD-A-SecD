// Events

// function welcomeUser() {
//   alert("alert call..");
// }

// function changingStyle(element) {
//   element.src =
//     "https://cdn.motor1.com/images/mgl/MkO9NN/s1/future-supercars.webp";

//   element.style.width = "400px";
//   element.style.borderRadius = "10px";
// }

// function returnStyleBack(e) {
//   e.src =
//     "https://m.atcdn.co.uk/ect/media/%7Bresize%7D/4b14ab0c7868451baf5912779f112f40.jpg";

//   e.style.width = "200px";
// }

// function insertLink(anchor) {
//   console.log(anchor);

//   anchor.href = "https://www.google.com";
//   anchor.target = "_blank";
// }

// console.log(document.getElementById('heading'));

// console.log(document.getElementsByClassName("para"));

// var anchorELment =

// document.getElementById("link");

// anchorELment.href =

// "https://www.google.com";

// console.log(anchorELment);

// var anchor = document.getElementById("link");

// anchor.href = "https://www.google.com";

// anchor.target = "_blank";

// console.log(anchor);

// var paras = document.getElementsByClassName("para");

// for (var i = 0; i < paras.length; i++) {
//   paras[i].style.color = "red";
//   paras[i].style.fontFamily = "arial";
//   paras[i].style.backgroundColor = "black";
//   paras[i].style.borderRadius = "10px";
//   paras[i].style.padding = "10px";
// }

// paras[1].style.color = "red";
// paras[2].style.color = "red";

function login() {
  var emailElement = document.getElementById("email");

  var passwordElement = document.getElementById("password");

  if (emailElement.value && passwordElement.value) {
    console.log(emailElement.value);

    console.log(passwordElement.value);
  } else {
    alert("fields missing");
  }
  
}

function On() {
  var img = document.getElementById("img");

  img.src =
    "https://i.pinimg.com/736x/8b/e0/60/8be0603fa9222908eac38746f7c72c2a.jpg";
}

function Off() {
  var img = document.getElementById("img");

  img.src =
    "https://i.pinimg.com/564x/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.jpg";
}
