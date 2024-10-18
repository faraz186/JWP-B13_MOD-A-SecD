function On() {
  var imgELement = document.getElementById("img");

  var button = document.getElementById("btn");

  if (button.innerHTML === "ON") {
    imgELement.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiC2UGjYAOn4uISa9Ho_SLHTqWi4JR-bFW7A&s";

    imgELement.width = "300";

    imgELement.height = "400";

    button.innerText = "off";
  } else {
    imgELement.src =
      "https://toppng.com/uploads/preview/light-bulb-on-off-png-115539402943y50vxr5yi.png";

    imgELement.width = "300";

    imgELement.height = "400";

    button.innerText = "ON";
  }
}

// function hideImg() {
//   var imgELement = document.getElementById("img");

//   imgELement.className += " hide";

//   console.log(imgELement);
// }

// function over() {
//   var img = document.getElementById("img");

//   img.src =
//     "https://t4.ftcdn.net/jpg/00/65/70/65/360_F_65706597_uNm2SwlPIuNUDuMwo6stBd81e25Y8K8s.jpg";
// }

// function out() {
//   var img = document.getElementById("img");

//   img.src =
//     "https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg?cs=srgb&dl=pexels-asphotograpy-235294.jpg&fm=jpg";
// }

// function over(id, imgSrc) {
//   var img =

//   document.getElementById(id);

//   img.src = imgSrc;

//   console.log(img);
// }

// var h1 = document.getElementById("heading");

// h1.style.color = "red";
// h1.style.backgroundColor = "black";
// h1.style.margin = "20px 50px 20px 100px";
// h1.style.fontFamily = "arial";
// h1.style.border = "2px groove green";
// h1.style.textDecoration = "underline";
// h1.style.fontStyle = "italic";

var div = document.getElementById("main");

var paragraph = div.getElementsByTagName("p");

for (var i = 0; i < paragraph.length; i++) {
  console.log(paragraph[i]);
}

// setInterval()

function timer() {
  console.log("function call...");
}

setInterval(timer, 3000);

// setTimeout()

function timer() {
  console.log("hello user");
}
setTimeout(timer, 5000);
