var studentObj1 = {
  stdName: "hamza",
  stdAge: 26,
  stdRollNo: 200,
  education: {
    program: "computer science",
    batch: 2024,
    rollno: 13511,
    CGPA: 3.2,
    address: {
      country: "Pakistan",
      city: "karachi",
      zipCode: 4564,
    },
  },
  stdEmail: "hamza@gmail.com",
  stdCity: "lahore",
};

// console.log(studentObj1["stdRollNo"]);

for (var outerKeys in studentObj1) {
  for (var innerKeys in studentObj1[outerKeys]) {
    for (var innerInnerKeys in studentObj1[outerKeys][innerKeys]) {
      //   console.log(studentObj1[outerKeys][innerKeys][innerInnerKeys]);
    }
  }
}

// console.log(studentObj1);

// Array of Object

var students = [
  {
    id: 1,
    name: "faraz",
    city: "karachi",
  },
  {
    id: 2,
    name: "abdullah kaimkhani",
    city: "karachi",
  },
  {
    id: 3,
    name: "ali",
    city: "karachi",
  },
  {
    id: 4,
    name: "farooq",
    city: "karachi",
  },
  {
    id: 5,
    name: "hamza",
    city: "karachi",
  },
];

// for (var i = 0; i < students.length; i++) {
//   for (var key in students[i]) {
//     console.log(key, students[i][key]);
//   }
// }

function greet() {
  try {
    alrt("Hello World");
  } catch (error) {
    console.log(error);
  }
}

// greet();
