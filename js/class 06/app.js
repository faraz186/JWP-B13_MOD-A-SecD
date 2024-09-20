// Array

var a = 10,
  b = 20,
  c = 30,
  d = 40;

//    0      1     2    3    4       5

var arr = [10, "faraz", 30, true, 50, undefined];

console.log(arr[1]);

var arr = [];

arr[0] = 10;
arr[1] = false;
arr[2] = null;

arr[4] = "faraz";

arr[7] = 52222222;

console.log(arr);

var arr = [20, , , 50, , , "faraz", , , , , , , , false];

console.log(arr);

var arr = [];

arr.push("faraz", true, 500);

console.log(arr);

// Array methods

// push method store data in the end of an array.

var fruitsArr = ["apple", "banana", "mango"];

fruitsArr.push("orange", "grapes");

// unshift method store data in the start of an array.

fruitsArr.unshift("orange", "grapes");

console.log(fruitsArr);

var fruitsArr = ["apple", "banana", "mango", "grapes", "pineApple"];

fruitsArr.pop();
fruitsArr.pop();

fruitsArr.shift();
fruitsArr.shift();

var fruitsArr = ["apple", "banana", "mango", "grapes", "pineApple"];

fruitsArr.splice(1, 2, "faraz");

fruitsArr.splice(-2, 2);

console.log(fruitsArr);

// ---------------------------------------------

var copy = fruitsArr.slice(0, 3);

console.log(copy);

console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");

// Loop

// iteration of a process or repeatation of something

// is called loop

// 1) For loop

// 2) while loop

// 3) do-while loop

// for(initialization;condition;increment/decrement){

// }

for (var i = 1; i <= 10; i++) {
  document.write("hello world" + "<br>");
}

for (var i = 10; i >= 1; i--) {
  console.log(i);
}

var input = +prompt("Enter any number");

var range = +prompt("Enter range");

for (var i = 1; i <= range; i++) {
  document.write(`${input} x ${i} = ${input * i} <br>`);
}
