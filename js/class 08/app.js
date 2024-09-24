// Chapter no 22 (String extracting methods)  

var str = prompt("Enter some text");

var numChars = str.length;

for (var i = 1; i < numChars; i++) {
  if (str.slice(i, i + 2) === "  ") {    
    alert("number found!");    
  }
}


var text = `The New Yorker magazine doesn't
allow the phrase World War II.  They say
it should be World War II`;
  
console.log(text.replaceAll("World War II", "The Second World War"));  

var indexNum = text.indexOf("World War II");

var startingText = text.slice(0, 50);

var replacingText = "The Second World War";
  
var remainText = text.slice(indexNum + 12);

console.log(startingText + replacingText + remainText);

var indexNum = text.indexOf("Arabian Sea");

var startingText = text.slice(0, 191);

var replacingText = "pacific ocean";

var remainText = text.slice(indexNum + 11);

console.log(startingText + replacingText + remainText);

for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 11) === "Arabian Sea") {
    text = text.slice(0, i) + "pacific ocean" + text.slice(i + 11);
  }
}

console.log(text);

var text = `The New Yorker magazine doesn't
 allow the phrase World War II.  They say
 it should be World War II`;

console.log(text.replaceAll("World War II", "The Second World War"));

var number = +prompt("Enter any decimal number");

console.log("round", Math.round(number));
console.log("ceil", Math.ceil(number));
console.log("floor", Math.floor(number));

var number = Math.random();

console.log(number.toFixed(3));
