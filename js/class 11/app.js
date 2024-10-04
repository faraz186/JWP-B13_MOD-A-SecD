 // function  

function greet() {
  console.log("function call..");  
}
  
// greet(); // function calling
  
greet();
greet();    
greet();


function sum() {  
  var a = 10,
    b = 20;
  console.log(a + b);
}    

sum(); 
  
  
function welcome(greet) {      // parameter;  
  console.log(greet);  
}

welcome("hello JS Function");
welcome(100);
welcome(true);
welcome("hello JS Function 3");



function add(num1, num2) {
  console.log(num1 + num2);
}

add(+prompt("Enter first number"), +prompt("Enter second number"));


function message(name, age, city) {
  console.log(
    `Hello My name is ${name}. I am ${age} years old and I lived in ${city}.`
  );
}   

message("faraz", 23, "karachi");


// multplication table program


function multiplicationTable(table, range) {
  for (var i = 1; i <= range; i++) {
    document.write(`${table} x ${i} = ${table * i} <br>`);
  }
}

multiplicationTable(+prompt("Enter any number"), +prompt("Enter range"));

function sum() {
  console.log("the num you pass is: ", num);
}

sum(50);

var arr = [1, 2, 3, 4, 5, 6];

var copy = arr.slice(0, 4);

console.log(copy);

function greet(message) {
  return message;
}

var result = greet("function call..");
  
console.log(result);

function multi(a, b) {
  var res = a * b;

  return res;
}

var get = multi(5, 6);

console.log(get + 10);



// Calculator program

function calc(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else if (operator === "%") {
    return num1 % num2;
  } else {
    return "invalid operator";
  }
}

var result = calc(
  +prompt("Enter first number"),
  +prompt("Enter Second number"),
  prompt("Enter operator")
);

console.log(result);

function name() {
  var naaam = "faraz";
  console.log(naaam);
}

name();
