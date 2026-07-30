/*
Example 1: Synchronous JavaScript

A)Executes one task at a time
B)Waits for the current task to finish
C)Blocking
D)Easier to understand

*/
//


function wakeUp() {
    console.log("Wake up");
}

function brushTeeth() {
    console.log("Brush teeth");
}

function eatBreakfast() {
    console.log("Eat breakfast");
}

wakeUp();
brushTeeth();
eatBreakfast();


/*
Example 2: Asynchronous JavaScript

A) Starts a task and continues with other tasks
B) Doesn't wait for long-running tasks
C) Non-blocking
D) More efficient for time-consuming operations

*/
// one 

console.log("Order Food");

setTimeout(() => {
    console.log("Food Delivered");
}, 3000);    // 3000 milliseconds = 3 seconds

console.log("Watching YouTube");

// two

console.log("A");

setTimeout(() => {
    console.log("B");
}, 100);

setTimeout(() => {
    console.log("C");
}, 0);

console.log("D");

setTimeout(() => {
    console.log("E");
}, 0);

console.log("F");



// three

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

console.log("3");

setTimeout(() => {
    console.log("4");
}, 0);

console.log("5");