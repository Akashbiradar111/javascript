// ===========================================
// JAVASCRIPT BASICS
// ===========================================



// ===========================================
// DATA TYPES
// ===========================================

// String
let name = "Akash";
console.log(name);

// Number
let age = 23;
console.log(age);

// Boolean
let isStudent = true;
console.log(isStudent);

// Undefined
let city;
console.log(city);

// Null
let phone = null;
console.log(phone);

// Object
let student = {
    name: "Akash",
    age: 23
};
console.log(student);

// Array
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);



// ===========================================
// TYPE CONVERSION
// ===========================================

// String → Number
console.log(Number("100"));

// Number → String
console.log(String(100));

// parseInt
console.log(parseInt("45.99"));

// parseFloat
console.log(parseFloat("45.99"));

// Boolean
console.log(Boolean(1));
console.log(Boolean(0));



// ===========================================
// OPERATORS
// ===========================================

let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

console.log(a > b);
console.log(a < b);
console.log(a == "10");
console.log(a === "10");

console.log(true && false);
console.log(true || false);
console.log(!true);



// ===========================================
// IF
// ===========================================

let marks = 80;

if (marks >= 35) {
    console.log("Pass");
}



// ===========================================
// IF ELSE
// ===========================================

let number = 7;

if (number % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}



// ===========================================
// ELSE IF
// ===========================================

let score = 91;

if (score >= 90) {
    console.log("Grade A");
}
else if (score >= 75) {
    console.log("Grade B");
}
else {
    console.log("Grade C");
}



// ===========================================
// SWITCH
// ===========================================

let day = 3;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid");
}



// ===========================================
// FOR LOOP
// ===========================================

for (let i = 1; i <= 5; i++) {
    console.log(i);
}



// ===========================================
// WHILE LOOP
// ===========================================

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}



// ===========================================
// DO WHILE
// ===========================================

let j = 1;

do {
    console.log(j);
    j++;
}
while (j <= 5);



// ===========================================
// FOR OF
// ===========================================

let colors = ["Red", "Green", "Blue"];

for (let color of colors) {
    console.log(color);
}



// ===========================================
// FOR IN
// ===========================================

let person = {
    name: "Akash",
    city: "Bangalore",
    age: 23
};

for (let key in person) {
    console.log(key, ":", person[key]);
}