// ===============================
// Task 4: Hoisting Practice
// ===============================


// ===============================
// 1. var Hoisting
// ===============================

console.log(a);

var a = 10;

console.log(a);


// ===============================
// 2. let Hoisting
// ===============================

// console.log(b);

let b = 20;

console.log(b);


// ===============================
// 3. const Hoisting
// ===============================

// console.log(c);

const c = 30;

console.log(c);


// ===============================
// 4. Function Declaration
// ===============================

greet();

function greet() {
    console.log("Hello");
}


// ===============================
// 5. Function Expression
// ===============================

// sayHi();

var sayHi = function () {
    console.log("Hi");
};

sayHi();


// ===============================
// 6. Arrow Function
// ===============================

// add();

const add = () => {
    console.log("Arrow Function");
};

add();


// ===============================
// 7. Global Scope
// ===============================

let name = "Akash";

function showName() {
    console.log(name);
}

showName();


// ===============================
// 8. Function Scope
// ===============================

function test() {
    let age = 23;
    console.log(age);
}

test();

// console.log(age);


// ===============================
// 9. Block Scope
// ===============================

if (true) {
    let city = "Bangalore";
    console.log(city);
}

// console.log(city);


// ===============================
// 10. var Block Scope
// ===============================

if (true) {
    var country = "India";
}

console.log(country);