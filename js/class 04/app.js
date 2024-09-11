var username = prompt("Enter your username");
  
var email = prompt("Enter your email");

var name = prompt("Enter your name");  

console.log(
  `Welcome user! your name
  is ${name}.
  My username is  
  ${username} and
   my email address  
   is ${email}`
);


var name = "Muhammad Faraz";  

console.log(`My name is ${name}`);  


// Template Literals


var userInput = prompt("Enter any number");

document.write("<h1>Multiplication Table</h1>");

document.write(`${userInput} x 1 = ${userInput * 1} <br>
   ${userInput} x 2 = ${userInput * 2} <br>
   ${userInput} x 3 = ${userInput * 3} <br>
   ${userInput} x 4 = ${userInput * 4} <br>
   ${userInput} x 5 = ${userInput * 5} <br>
   ${userInput} x 6 = ${userInput * 6} <br>
   ${userInput} x 7 = ${userInput * 7} <br>
   ${userInput} x 8 = ${userInput * 8} <br>
   ${userInput} x 9 = ${userInput * 9} <br>
   ${userInput} x 10 = ${userInput * 10} <br>

`);

// parenthesis

// datatypes

// String
// Number
// undefined
// Boolean    true or false


if (false) {
  alert("Welcome user!!");
}


var city = prompt("Enter where do you live?");

if (city === "karachi") {
  alert("Welcome user.");

} else {
  alert("welcome you live in " + city);
}

// --------------------------------------------------------------------------------


var age = +prompt("Enter your age");

if (age >= 18) {
  console.log("you are eligible for CNIC");
} else {
  console.log("you are not eligible for CNIC");
}



var gender = prompt("Enter your gender");
var message;

if (gender === "male") {
  message = "welcome mr.";
}

if (gender === "female") {
  message = "welcome miss.";
}

alert(message);




var rollno = +prompt("Enter your Roll no");

if (rollno !== 500) {
  console.log("you are not allow to sit in exam");
}

if (rollno !== 300) {
    console.log("you are not allow to sit in exam");
  }

else {
  console.log("you are allow to sit in exam");
}




// false
// 0
// ""
// undefined
// null



var a = null;
var a = false;
var a = undefined;
var a = true;
var a = 1;
var a = 0;


if (a) {
  console.log("if statement call..");
} else {
  console.log("else statement call..");
}



// else if statement

var gender = prompt("Enter your gender");
var message;

if (gender === "male") {
  message = "welcome mr.";
}

else if (gender === "female") {
  message = "welcome miss.";
}

alert(message);



var percentage = +prompt("Enter your percentage");

if (percentage <= 50) {
  alert("YOur grade is D");
} else if (percentage <= 60) {
  alert("YOur grade is C");
} else if (percentage <= 70) {
  alert("YOur grade is B");
} else if (percentage <= 79) {
  alert("YOur grade is A");
} else if (percentage <= 100) {
  alert("YOur grade is A+");
} else {
  alert("incorrect");
}




var userInput = +prompt("Enter any number");

if (userInput == "") {
  document.write("<h1>Multiplication Table</h1>");
  document.write(`5 x 1 = ${5 * 1} <br>
        5 x 2 = ${5 * 2} <br>
        5 x 3 = ${5 * 3} <br>
        5 x 4 = ${5 * 4} <br>
        5 x 5 = ${5 * 5} <br>
        5 x 6 = ${5 * 6} <br>
        5 x 7 = ${5 * 7} <br>
        5 x 8 = ${5 * 8} <br>
        5 x 9 = ${5 * 9} <br>
        5 x 10 = ${5 * 10} <br>
     
     `);
} else {
  document.write(`${userInput} x 1 = ${userInput * 1} <br>
        ${userInput} x 2 = ${userInput * 2} <br>
        ${userInput} x 3 = ${userInput * 3} <br>
        ${userInput} x 4 = ${userInput * 4} <br>
        ${userInput} x 5 = ${userInput * 5} <br>
        ${userInput} x 6 = ${userInput * 6} <br>
        ${userInput} x 7 = ${userInput * 7} <br>
        ${userInput} x 8 = ${userInput * 8} <br>
        ${userInput} x 9 = ${userInput * 9} <br>
        ${userInput} x 10 = ${userInput * 10} <br>
        
        `);
}
