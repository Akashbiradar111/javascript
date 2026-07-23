// ===============================
// Student Object
// ===============================

const student = {
  name: "Akash",
  age: 23,
  course: "B.Tech",
  address: {
    city: "Bangalore",
    state: "Karnataka"
  }
};

// ===============================
// 1. Basic Destructuring
// ===============================

const { name, age } = student;

console.log(name);
console.log(age);

// ===============================
// 2. Rename Variables
// ===============================

const { course: studentCourse } = student;

console.log(studentCourse);

// ===============================
// 3. Default Value
// ===============================

const { college = "PDA College of Engineering" } = student;

console.log(college);

// ===============================
// 4. Nested Object Destructuring
// ===============================

const {
  address: { city:town, state }
} = student;

console.log(city);
console.log(state);

// ===============================
// 5. Destructuring in Function Parameter
// ===============================

function displayStudent({ name, age }) {
  console.log("Name:", name);
  console.log("Age:", age);
}

displayStudent(student);

// ===============================
// 6. Rest Operator
// ===============================

const { name: studentName, ...remainingDetails } = student;

console.log(studentName);
console.log(remainingDetails);

// ===============================
// 7. Spread Operator
// ===============================

const updatedStudent = {
  ...student,
  age: 24,
  course: "M.Tech"
};

console.log(student);
console.log(updatedStudent);