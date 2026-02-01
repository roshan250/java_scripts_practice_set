

//There are two types of data types in java script 

// 1. primitive [ 7 types ]: string, number, boolean, null,  undefined, symbol, bigint

//symbol
const id = Symbol('123')
const id2 = Symbol('123')
console.log(id === id2);

//Big Int
const bignum = 12345678945678678n;

//2. Array, object, Function

//Array
const roomates = ["Rohan", "samir", "pranav", "Dipak"];

//object
let myObj = {
    name: "Roshan",
    age: 22,
}

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof roomates)

//Types of Memorys Stack( Premitive ) and Heap (Non- Primitive)

let orignalname = "roshan"

let myname = orignalname
myname="motu"
console.log(orignalname)
console.log(myname)


let userOne = {
    
}