const user = {
    username: "Roshan",
    price: 999,
    
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to Roshans World`);
        return this;
    }
}

// console.log(user.welcomeMessage());
// user.username = "Hitesh";
// console.log(user.welcomeMessage());
// console.log(this)

// function chai() {
//     console.log(this);
// }



// const chai = () => {
//     let usernam = "Rosahn"
//     console.log(this)
// }
// chai();

// Explicit 
// const addTwo = (num1, num2) => {
//     return num1+num2;
// }

// Implicit
// const addTwo = (num1, num2) => num1+num2
// const addTwo = (num1, num2) => (num1+num2)

const addTwo = (num1, num2) => ({name:"Myname", myage:"23"})
console.log(addTwo(2,3));