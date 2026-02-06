
function addTwoNumber(number1, number2){
    const sum = number1 + number2
    console.log(sum)
}
addTwoNumber(3,5)

function calculateCartPrice(...num1){ //...rest operator
    return num1
}

console.log(calculateCartPrice(200,400,500));

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

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1,2,3,4,5]));


