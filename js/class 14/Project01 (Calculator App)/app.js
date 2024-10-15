function getValue(buttonValue) {
  var input = document.getElementById("inputField");

  input.value += buttonValue;
}

function clrAll() {
  var input = document.getElementById("inputField");

  input.value = "";
}

function deleteChar() {
  var input = document.getElementById("inputField");

  input.value = input.value.slice(0, -3);
}

function squareNum() {
  var input = document.getElementById("inputField");

  input.value = input.value * input.value;
}

function equal() {
  var input = document.getElementById("inputField");

  if (!input.value) {
    input.value = "syntax error";
  } else {
    input.value = eval(input.value);
  }
}
