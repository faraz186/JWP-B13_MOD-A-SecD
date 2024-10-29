var studentArr = ["faraz", 23, 186, "faraz@gmail.com", "karachi"];

console.log(studentArr[2]);

// Objects

var studentObj = {
  stdName: "faraz",
  stdAge: 23,
  stdRollNo: 186,
  stdEmail: "faraz@gmail.com",
  stdCity: "karachi",
};

console.log(studentObj);

studentObj.courses = ["html", "css", "js", "react"];
  
studentObj.qualification = {
  Education: "bachelors",
  CGPA: "3.2",
  Address: {  
    city: "karachi",
    country: ["pakistan", "turkey", "india"],
  },
};

studentObj.stdRollNo = 286;

console.log(studentObj.qualification.Address.country[0]);

console.log(
  `My name is ${studentObj["stdName"]} and i am ${studentObj.stdAge} years old`
);

console.log(studentObj.stdAge);

console.log(studentObj["stdEmail"]);

var studentObj = {
  stdName: "faraz",
  stdAge: 23,
  stdRollNo: 186,
  stdEmail: "faraz@gmail.com",
  stdCity: "karachi",
};

delete studentObj.stdCity;

var response = "stdRollNo" in studentObj;

console.log(response);

console.log(studentObj.stdName);

var studentObj = {
  stdName: "faraz",
  stdGetName: function () {
    console.log(this.stdName);
  },
  stdAge: 23,
  stdStatus: true,
  stdCourses: ["html", "css", "js"],  
  stdRollNo: 186,
  stdEmail: "faraz@gmail.com",
  stdCity: "karachi",
};

studentObj.stdGetName();

console.log();

document.write();

// There are 3 types of function in JS

// 1) fUNCTION DECALRATION

function greet() {
  console.log("function decalaration call..");
}

greet();

// 2) Anonymous Function / Regular Function

var func = function () {
  console.log("Anonymous Function call..");
};
func();

// 3) Arrow Function / Fat-arrow function

var studentObj1 = {
  stdName: "faraz",
  stdAge: 23,
  stdRollNo: 186,
  stdEmail: "faraz@gmail.com",
  stdCity: "karachi",
};

var studentObj1 = {
  stdName: "hamza",
  stdAge: 26,
  stdRollNo: 200,
  stdEmail: "hamza@gmail.com",
  stdCity: "lahore",
};

function greet() {}

greet();

function Student(name, age, rollno, email, city, gender) {
  this.stdName = name;
  this.stdAge = age;
  this.stdRollNo = rollno;
  this.stdEmail = email;
  this.stdCity = city;
}

Student.prototype.stdGetGender = function () {
  console.log("gender");
};

var student1 = new Student(
  "faraz",
  23,
  186,
  "faraz@gmail.com",
  "karachi",
  "male"
);
var student2 = new Student(
  "farooq",
  20,
  68334,
  "farooq@gmail.com",
  "karachi",
  "male"
);

var student3 = new Student(
  "farooq",
  20,
  68334,
  "farooq@gmail.com",
  "karachi",
  "male"
);

var student4 = new Student(
  "farooq",
  20,
  68334,
  "farooq@gmail.com",
  "karachi",
  "male"
);
console.log(student1);

console.log(student2);

console.log(student3);

console.log(student4);

var studentObj1 = {
  stdName: "hamza",
  stdAge: 26,
  stdRollNo: 200,
  stdEmail: "hamza@gmail.com",
  stdCity: "lahore",
};

for (var key in studentObj1) {
  console.log(studentObj1[key]);
}
