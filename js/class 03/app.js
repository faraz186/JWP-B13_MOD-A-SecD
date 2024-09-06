var firstName = "faraz";

var last_name = "faraz";

var full_name = "faraz";

var num1 = "8";

var num2 = 3;

console.log(num1 - num2);

var exp = 2 + 16 / (10 - 8);

// BODMAS ==> BRACKET,ORDER,DIVISON,MUTL,ADD,SUUB

console.log(exp);

// post Increment / decrement

// num++             num--

// pre increment / decrement

// ++num            --num

var num = 1;

console.log(num);

var res = ++num;

console.log(res);

var num = 8;

var num2 = 2;

var exp = num++ - --num2;

console.log(exp);

var num = 2;

console.log(num);

var result = --num;

console.log(result);

var a = 4;

var b = 3;

var exp = a++ - a-- + ++b + --b + a++ + --b - --a + --b + b++ + a++;

//   4   -  5  +  4  + 3   +  4  +  2  -  4  +  1   + 1   + 4

console.log(exp);

// Prompt (Chap # 9)

var userFirstName = prompt("Enter your first name");

var userLastName = prompt("Enter your last name");

console.log(userFirstName + " " + userLastName);

//  FOR NUMBER INPUT

var num1 = +prompt("Enter first number");

var num2 = +prompt("Enter second number");

console.log(num1 + num2);
