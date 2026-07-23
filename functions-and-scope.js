// ===========================================
// GLOBAL SCOPE
// ===========================================

let country = "India";

function showCountry() {
    console.log(country);
}

showCountry();



// ===========================================
// FUNCTION SCOPE
// ===========================================

function test() {

    let age = 23;

    console.log("Age:", age);

}

test();



// ===========================================
// BLOCK SCOPE
// ===========================================

if (true) {

    let city = "Bangalore";

    console.log("City:", city);

}



// ===========================================
// FUNCTION HOISTING
// ===========================================

// Function Declaration is Hoisted

sayHello();

function sayHello() {
    console.log("Function Declaration is Hoisted");
}



// ===========================================
// FUNCTION EXPRESSION
// ===========================================

// Function Expression is NOT Hoisted
// Correct way: declare first, then call

const hi = function () {
    console.log("Hello from Function Expression");
};

hi();



// ===========================================
// ARROW FUNCTION
// ===========================================

// Arrow Function is also NOT Hoisted
// Correct way: declare first, then call

const welcomeUser = () => {
    console.log("Hello from Arrow Function");
};

welcomeUser();