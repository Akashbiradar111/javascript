// A function is a block of code that performs a specific task only when you call it.
function greet() {
    console.log("Hello");
}

console.log(greet);


//1) function declaration
function greet() {
    console.log("Hello");
}

greet();

//with parameters

function greet(name) {
    console.log("Hello " + name);
}

greet("Akash");

//hoisting 

greet(); //becasue function declaration are hoisted 

function greet() {
    console.log("Hello");
}

//2. Function Expression : 

let greet = function () {
    console.log("Hello");
};

greet();

// with parameters

let greet = function (name) {
    console.log("Hello " + name);
};

greet("Akash");

// hoisting 

greet(); 

let greet = function () {
    console.log("Hello");
};

//output : ReferenceError

//3. Arrow Function

let greet = () => {
    console.log("Hello");
};

greet();

// with parameter

let greet = name => {
    console.log("Hello " + name);
};

greet("Akash");
// multiple parameter
let add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));


// this 
//Function Declaration / Function Expression
const person = {
    name: "Akash",

    greet: function () {
        console.log(this.name);
    }
};

person.greet();

// Arrow function 
//this

const person = {
    name: "Akash",

    greet: () => {
        console.log(this.name);
    }
};

person.greet();