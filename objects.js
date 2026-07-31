
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







let employees = {
    name : "vaibhav",
    emid : "em123",
    phno : 6363666147,
    desg : "software engineer",
    MD : {
        ownername : "akash",
        phno : 9380727701
    }
 };

 console.log(employees);


console.log(employees.name);

//update 
employees.desg = "business man";
console.log(employees);

// add
employees.home ="klb";
console.log(employees);


delete employees.age;
console.log(employees);



console.log(employees.MD);





employees.MD.ownername = "vaibhav";

console.log(employees);


employees.MD.age = 34;
console.log(employees);


delete employees.MD.age ;
console.log(employees);






let man = [
    {
    name : "akash",
    age  :  23,
    phno : 9380727701
},
{
    name : "alok",
    age  :  23,
    phno : 9382327701
    
}];

console.log(man);