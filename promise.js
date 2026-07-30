//1st example

console.log("1");

let promise = new Promise(function(resolve, reject) {
    console.log("2");
    resolve();
    console.log("3");
});

promise.then(function() {
    console.log("4");             //This registers the callback. It still doesn't execute it immediately.
});

console.log("5");




// 2nd example


console.log("A");

setTimeout(() => {               //It goes into the Callback Queue (Macrotask Queue).Nothing prints yet.
    console.log("B");
}, 0);

Promise.resolve().then(() => {    //"I'll put .then() into the Microtask Queue." Again, nothing prints yet.
    console.log("C");            //👉 Promises always get priority over setTimeout(), even if the timeout is 0 milliseconds.
});

console.log("D");




//3rd example

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");

    setTimeout(() => {
        console.log("4");
    }, 0);
});

console.log("5");

Promise.resolve().then(() => {
    console.log("6");
});