// function applyImg(imgELement) {
//   console.log(imgELement);

//   imgELement.src =
//     "https://e7.pngegg.com/pngimages/694/639/png-clipart-computer-icons-user-profile-female-symbol-miscellaneous-purple.png";
// }

// console.log(document.getElementById("h1"));
// console.log(document.getElementById("link"));
// console.log(document.getElementById("p1"));
// console.log(document.getElementById("p2"));

// var bodyElements = document.getElementsByClassName("elements");

// for (var i = 0; i < bodyElements.length; i++) {
//   bodyElements[i].style.textDecoration = "underline";
// }

// bodyElements[0].style.textDecoration = "underline";
// bodyElements[1].style.textDecoration = "underline";
// bodyElements[2].style.textDecoration = "underline";
// bodyElements[3].style.textDecoration = "underline";

// console.log(bodyElements);

function getData() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  if (email.value.trim() && password.value.trim()) {
    console.log(email.value);
    console.log(password.value);
  } else {
    alert("fields are missing");
  }
}

function getRadioData() {
  var radios = document.getElementsByClassName("gender");

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      console.log(radios[i].value);
    }
  }
}

function getDropdown() {
  var dropdown = document.getElementById("dropdown");

  console.log(dropdown.value);
}

function set() {
  var input = document.getElementById("inp");

  input.value = "faraz";
}

// innerHTML

// innerText

// var h1heading = document.getElementById("heading");

var paragragh = document.getElementById("para");

console.log(h1heading.innerText);

console.log(paragragh.innerText);

var h1 = document.getElementById("heading");

h1.innerHTML = "<p>Hello World</p>";

console.log(h1);

// function fullPara() {
//   var completeText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maiores doloribus inventore reiciendis voluptatibus corporis facere. Magni possimus, nisi vitae animi mollitia id. Nisi, excepturi nulla cupiditate explicabo ab id distinctio eligendi assumenda laudantium eveniet ea vel! Unde consectetur eveniet saepe, atque aperiam sit debitis vel dolor aliquid, ullam necessitatibus!`;

//   var element = document.getElementById("para");

//   var anchorelement = document.getElementById("link");

//   element.innerHTML = completeText;

//   anchorelement.innerHTML = "read less";
// }

function completePara() {
  var para = document.getElementById("para");

  var anchor = document.getElementById("link");

  if (anchor.innerHTML === "Read More") {
    para.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quaerat! Rerum deserunt et recusandae est corrupti sapiente, facilis, at labore distinctio alias in, aliquam tenetur necessitatibus enim odio? Aut, repellat repudiandae animi necessitatibus deleniti quisquam illum provident repellendus quod consequatur error laborum ad eveniet totam vel asperiores nobis recusandae eos?`;

    anchor.innerHTML = "Read less";
  } else {
    para.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. `;

    anchor.innerHTML = "Read More";
  }
}
