const score =400;
// console.log(score)

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const Number_two = 123.333
// console.log(Number_two.toPrecision(4))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

//-----------------MATH'S----------------

console.log(Math) //math object
console.log(Math.abs(-4)); // -ve value change to +ve 4
console.log(Math.round(4.6)); // make max or min value round value
console.log(Math.ceil(4.2)); //only  give max value round
console.log(Math.floor(4.9)); // only gives min value  round
console.log(Math.min(4,3,6,9)); //min value  from array
console.log(Math.max(4,3,6,9)); //max value  from array

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1 ) ) + min);
