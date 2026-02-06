// Object 
const mysbm = Symbol("key1")
const mydeatils ={
    name : "Roshan",
    "fullname" : "Rosahn Bhuskute",
    [mysbm] : "mykay1",
    age : 23,
    Group : "audal",
    email : "roshan@gmail.com"
}

console.log(mydeatils.name);
console.log(mydeatils["fullname"])
console.log(mydeatils[mysbm]);


