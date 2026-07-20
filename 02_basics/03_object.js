// Object 
const mysym = Symbol("key1")
const mydeatils = {
    name: "Roshan",
    "fullname": "Rosahn Bhuskute",
    [mysym]: "mykay1",
    age: 23,
    Group: "audal",
    email: "roshan@gmail.com"
}

console.log(mydeatils.name);
console.log(mydeatils["fullname"]);
console.log(mydeatils[mysym]);
mydeatils.email = "roshanShivarix@gmail.com";
mydeatils.greeting = function () {
    console.log("Hello js user");
}

mydeatils.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

Object.freeze(mydeatils);
mydeatils.email = "roshanb@microsoft.com";
console.log(mydeatils);

console.log(mydeatils.greeting());
console.log(mydeatils.greetingTwo());

