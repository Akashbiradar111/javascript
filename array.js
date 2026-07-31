

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

let animals = ["lion","tiger","cheeta"];
console.log(animals.join("-"));


// concat () : combines arrays.

let a = [12,34];
let b = [34,56];
console.log(a.concat(b));






//slice examples 

let A = ["akash","abhi","aditya","nihal"];
let B = A.slice(0,2);
console.log(B);

let C = [10,20,30,40,50,60,70,80,90,100];
let D = C.slice(2);
console.log(D);

let E = [10,20,30,40,50,60,70,80,90,100];
let F = C.slice(-7);
console.log(F);

let G = [10,20,30,40,50,60,70,80,90,100];
let H = G.slice(-7, -2);
console.log(H);

let I = [10, 20, 30, 40, 50];

console.log(I.slice(0, 0));  //out put An empty array []



let A = [10, 20, 30, 40, 50];

console.log(A.slice(4, 2));
//output : []
// slice() never goes backwards.



// Splice 

// 1) remove elements 

// Start at index 1 (B)
// Remove 2 elements


let A = ["A", "B", "C", "D", "E"];

A.splice(1, 2);

console.log(A);

// 2) add an element 

//Start at index 1
//Remove 0 elements
//Insert "B"

let A = ["A", "C", "D"];

A.splice(1, 0, "B");

console.log(A);

// 3) Remove old elements and insert new elements at the same position.

let A = ["A", "B", "C", "D"];

A.splice(1, 2, "X", "Y");

console.log(A);

*/

// includes : Checks whether an element exists.

let A = ["car","bus","truck"];
let B =  A.includes("11");
console.log(B);

// indexof : Returns the index of an element.

let S = ["akash","abhi","aditya","nihal"];
let T = S.indexOf("nihal");
console.log(T);

// lastindexOf :

let X = ["duck","bird","peacock","rabbit","horse","peacock","donkey"];
let Y = X.lastIndexOf("peacock");
console.log(Y);


/*
Small Difference
indexOf() → Returns the first occurrence of an element (searches left → right).
lastIndexOf() → Returns the last occurrence of an element (searches right → left).
Example
let arr = ["A", "B", "C", "B"];

console.log(arr.indexOf("B"));      // 1
console.log(arr.lastIndexOf("B"));  // 3

Remember:

✅ indexOf() → First occurrence
✅ lastIndexOf() → Last occurrence
*/

// The Most Important Iteration Methods

// 1. forEach()
// Go through every element and do something with it.

let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruits) {
    console.log(fruits);
});

// 2. map() 
// Go through every element, modify it, and create a new array.
// ✅ Creates a new array.
// ✅ Original array remains unchanged.

let numbers = [1, 2, 3, 4];

let result = numbers.map(function(num) {
    return num * 2;
});

console.log(result);

// 3. filter ()
// Keep only the elements that satisfy a condition.
// ✅ Returns a new array.
// ✅ Keeps only matching elements.

let num3 = [12,45,232,45,756,323,234];

let num4 = num3.filter(function(nums){
    return nums < 100;
});
console.log(num4);

// 4. findIndex()
//  Find the index of the first element that matches a condition.

let sum4 = [100,200,300,400,500];

let sum5 = sum4.findIndex(function(re){
    return re > 400;
});

console.log(sum5);