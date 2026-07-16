// ===============================
// 1. var Hoisting
// ===============================

console.log(a); // Output: undefined

var a = 10;

console.log(a); // Output: 10

// Explanation:
// 'var' is hoisted.
// Only the declaration is moved to the top.
// Initial value is undefined until assignment.


// ===============================
// 2. let Hoisting
// ===============================

// console.log(b); // Error

let b = 20;

console.log(b); // Output: 20

// Explanation:
// 'let' is hoisted but kept in the
// Temporal Dead Zone (TDZ).
// Cannot access before declaration.


// ===============================
// 3. const Hoisting
// ===============================

// console.log(c); // Error

const c = 30;

console.log(c); // Output: 30

// Explanation:
// 'const' is also hoisted but in TDZ.
// Cannot access before declaration.


// ===============================
// 4. Function Declaration
// ===============================

greet();

function greet() {
    console.log("Hello");
}

// Output:
// Hello

// Explanation:
// Function declarations are completely hoisted.


// ===============================
// 5. Function Expression
// ===============================

// sayHi(); // Error

var sayHi = function () {
    console.log("Hi");
};

sayHi();

// Explanation:
// Only the variable is hoisted.
// Function is assigned later.


// ===============================
// 6. Arrow Function
// ===============================

// add(); // Error

const add = () => {
    console.log("Arrow Function");
};

add();

// Explanation:
// Arrow functions are not hoisted.
// 'const' stays in TDZ.


// ===============================
// 7. Global Scope
// ===============================

let name = "Akash";

function showName() {
    console.log(name);
}

showName();

// Output:
// Akash

// Explanation:
// Global variables can be accessed inside functions.


// ===============================
// 8. Function Scope
// ===============================

function test() {
    let age = 23;
    console.log(age);
}

test();

// console.log(age); // Error

// Explanation:
// 'age' exists only inside the function.


// ===============================
// 9. Block Scope
// ===============================

if (true) {
    let city = "Bangalore";
    console.log(city);
}

// console.log(city); // Error

// Explanation:
// 'let' and 'const' are block scoped.


// ===============================
// 10. var Block Scope
// ===============================

if (true) {
    var country = "India";
}

console.log(country);

// Output:
// India

// Explanation:
// 'var' ignores block scope.
// It becomes function/global scoped.