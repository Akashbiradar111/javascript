//array: stores multiple values in one variable

let fruitss =["apple","banana","mango"];
console.log(fruitss);
console.log(fruitss.length);
console.log(fruitss[0]);
console.log(fruitss[1]);
console.log(fruitss[2]);

//array methods 
//push:adds an element at the end 
let fruits =["apple","banana","mango"];
fruits.push("cheery");
console.log(fruits);

//pop : removes an element from the end
let fruit =["apple","banana","mango"];
fruit.pop();
console.log(fruit);

//shift : removes an element from beginning
let bike =["tvs","honda","hero"];
bike.shift();
console.log(bike);

//unshift : add's an element at the front 

let cars = ["defender","gwagon"];
cars.unshift("ferrari");
console.log(cars);

// slice:Returns a portion of an array, Original array remains unchanged. "Give me a copy of this part."
// let names = ["abhi","akash","avinash","bapugouda","alok"];
//                0       1       2           3          4
// console.log(names.slice(0, 2));  it will not consider the last one 2 it will print only upto 0 & 1

let names = ["abhi","akash","avinash","bapugouda","alok"];
console.log(names.slice(0, 2));

// splice :Purpose: Add, remove, or replace elements in an array.

let colours = ["yellow","red","blue","orange"];
colours.splice(1, 1,);
console.log(colours);

//sort : sort by alphabets.  "Cut this part out of the original array."

let alphabets =["dog","cat","animal"];
alphabets.sort();
console.log(alphabets);

let numbers = [342,12,54,21,4,33,23];
numbers.sort();
console.log(numbers);

//reverse : Reverses the array.

let rev = [1,2,3,4,5,6,7,8,9,10];
rev.reverse();
console.log(rev);

// join() : Converts an array into a string.

let wildanimals = ["lion","tiger","cheeta"];
console.log(wildanimals.join("-"));


// concat () : combines arrays.

let a = [12,34];
let b = [34,56];
console.log(a.concat(b));