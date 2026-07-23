// objects : stores data as a key value pairs.

let student = {
    name:"akash",
    age:23,
    city:"kalaburagi"
};

// Dot notation

console.log(student.name);
console.log(student.age);
console.log(student.city);

//updating properties

student.age = 24;
console.log(student);

//adding properties

student.fathername = "prakash"
console.log(student);

student.phno = (9380727701);
console.log(student);
//deleting the properties

delete student.age;
console.log(student);


//Nested Objects : objects can contain other objects

let teachers = {
    maths : "present",
    science : "present",
    PT :{
        ptsir : "absent",
        ptmaam : "present"
    }
}

console.log(teachers.PT.ptsir);

// Arrays of objects: 

let cars = [
    {
        suzuki : "swift",
        milage : 12
    },
    {
        toyota : "fortuner",
        milage : 5
    }
];

// Access values:
console.log(cars[1].toyota);