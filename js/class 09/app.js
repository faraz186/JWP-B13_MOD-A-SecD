var colors = ["red", "green", "blue", "white"];  
  
console.log("previous array", colors);  

var userInput = prompt("Enter a color to the begining of an array");

var userInput1 = prompt("Enter a color to the end of an array ");  

colors.unshift(userInput);

colors.push(userInput1);

colors.unshift("black", "cyan");      

colors.shift();  

colors.pop();

var colors = ["red", "green", "blue", "white"];  

var userInput = +prompt("starting position of array index");
  
var deleteInput = +prompt("Enter delete elements");

colors.splice(userInput, deleteInput);

console.log("current array", colors);



var mobileArr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write(`<select><option>${mobileArr[0]}</option>
    <option>${mobileArr[1]}</option>
    <option>${mobileArr[2]}</option>
    <option>${mobileArr[3]}</option>
    <option>${mobileArr[4]}</option>

    </select>`);



var devices = ["keyboard", "mouse", "printer", "monitor"];

document.write(
  `Devices: <br> ${devices[0]},${devices[1]},${devices[2]},${devices[3]} <br> <br>`
);

for (var i = devices.length - 1; i >= 0; i--) {
  document.write(`Out: <br> ${devices[i]} <br>`);
}



// Array (Join method)

var arr = [10, "faraz", 30, true, 50];

var singleElement = arr.join(" ");

console.log(singleElement);



// String (.startsWith method)

var str = "hello world";

console.log(str.startsWith("z"));



// String (.endssWith method)

var str = "hello world";

console.log(str.endsWith("f"));

String (.includes method)

var str = "hello  world";

console.log(str.includes("  "));

var country_list = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

var arr = [];

for (var i = 0; i < country_list.length; i++) {
  if (country_list[i].includes("tan")) {
    arr.push(country_list[i]);
  }
}

console.log(arr);


// head tail program


var headUser = prompt("Enter head username");

var tailUser = prompt("Enter tail username");

var toss = Math.random();

var selectedValue = Math.round(toss);

if (selectedValue === 0) {
  alert(headUser, " win the toss");
} else {
  alert(tailUser, " win the toss");
}


// Password program


var input = +prompt("enter passsword range");


var randomValues =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZbacdefghijklmnopqrstuvwxyz1324567890!@#$&*";

var password = "";

for (var i = 0; i < input; i++) {
  var randomNumbers = Math.floor(Math.random() * randomValues.length);
  password += randomValues[randomNumbers];
}

console.log(password);


var num = 10;

num = num -  5;

console.log(num);



// Palindrome program


var userInput = prompt("Enter any word");

var finalWord = "";

for (var i = userInput.length-1; i>=0; i--){
 finalWord+=userInput[i];
}
if(userInput===finalWord){
    alert(`It is palindrome`)
}else{
    alert(`It's not a palindrome`)
}
