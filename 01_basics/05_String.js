
/*String Manupulation*/
const name = "Roshan"
const repoCount =50
//console.log(name + repoCount + " Values")  It is old Method

//console.log(`Hello my name is ${name} and my repo countis ${repoCount}`); //It is the modern way of String manupulation

/*String Function*/
const gameName = new String('Roshan');

// console.log(gameName[1]); //for printing the at index value
// console.log(gameName.indexOf('n'));
// console.log(gameName.slice(-2,5));


const newString = gameName.substring(0,4)
console.log(newString);

const myName = "   Shiv   "
console.log(myName);
const nn=myName.trim()
console.log(nn);
const Role = "React Native Devloper";
console.log(Role.split(" "));

let email = 'roshan bhuskute@gmail.com'
console.log(email.replace(' ', ""))
console.log(email.includes("g"))
