// Basic Function Declaration and its use
function UserName(){
    console.log("Roshan");
}
// UserName();
// UserName();


function addTwoNumber(number1, number2){
    const sum = number1 + number2
    console.log(sum)
}
// addTwoNumber(3,5)


//function return the valuse
function addTwoNumber(number1, number2){
    // const sum = number1 + number2
    // return sum;
    return number1 + number2;
    console.log("Roshan"); // after returen keyword in function not execute the code 
}

result = addTwoNumber(5,5);
// console.log(result);


//Finction advance handaling with validation 
function welcome(userName="User"){
    if( !userName ){
        console.log("Plase Enter Your name..");
        return
    }
    return `Welcome ${userName}...`
}
// console.log(welcome());




function calculateCartPrice(...num1){ //...rest operator
    return num1
}

// console.log(calculateCartPrice(200,400,500));

const user = {
    username  : "hitesh",
    price : 199
}

// function handleObject(anyObject){
//     console.log(`User name is ${anyobject.username} and price is ${anyObject.price}`);
// }

// handleObject(user)

const myNewArray = [200, 400, 100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([1,2,3,4,5]));

// Passing the values to  function
function calculateCartPrice(val1, val2, ...num){
    return num
}

// console.log(calculateCartPrice( 200, 400, 500, 2000))


// Passing object to the function
const DevloperProfile = {
    username  : "Roshan",
    role : "React Native Developer"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Role is ${anyobject.role}`);
}

// handleObject(DevloperProfile);


// Passing Array to the function
function handleArray(getArray){
    return getArray;
}
console.log(handleArray([1,2,3,4,5]));