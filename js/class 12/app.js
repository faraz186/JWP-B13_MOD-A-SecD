// Switch statement

var userInput = prompt("Enter your day of week");

userInput = userInput.slice(0, 3).toLowerCase();

switch (userInput) {
  case "mon":
    alert("Monday is working day..");
    break;
  case "tue":
    alert("tuesday is working day");
    break;

  case "wed":
    alert("Wednesday is working day");
    break;

  case "thu":
    alert("thursday is working day");
    break;

  case "fri":
    alert("friday is working day");
    break;

  case "sat":
    alert("saturaday is weekend..");
    break;

  case "sun":
    alert("sunday is family day");
    break;

  default:
    alert("invalid input..");
}

// FOR LOOP


for (var i = 0; i <= 5; i++) {
  console.log(i);
}



// WHILE LOOP


var arr = ["faraz", 105, true, undefined];

var i = 0;

while (i < arr.length) {
  console.log(arr[i]);
  i++;
}



// DO-WHILE LOOP


var arr = ["faraz", 105, true, undefined];

var i = 0;

do {
  console.log(arr[i]);
  i++;
} while (i < arr.length);



var table = +prompt("Enter any number");

var range = +prompt("Enter range");

var i = 1;

do {
  document.write(`${table} * ${i} = ${table * i} <br>`);
  i++;
} while (i <= range);



var input = prompt("Enter any word");
var reverse = "";



var i = input.length - 1;

while (i >= 0) {
  reverse += input[i];
  i--;
}



if (input === reverse) {
  console.log("it is palindrome word");
} else {
  console.log("it is not a palindrome word");
}




function submit() {
  Swal.fire({
    title: "Good job!",
    text: "form has been submitted!",
    icon: "error",
  });
}



function greet(message) {
  Swal.fire({
    title: "Good job!",
    text: message,
    icon: "error",
  });
}
