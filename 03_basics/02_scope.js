var c = 100;

if (true) {
    const a = 10
    let b = 20
    // var c = 30

    // console.log("in Scope")
    // console.log(a)
    // console.log(b)
    // console.log(c)
}

// console.log("in out of Scope")
// console.log(a)
// console.log(b)  
// console.log(c)



//*************************[ 22.Sope Level and Hoisting ]*********************************

// Scope Level code - 1
function one() {
    const developer = "Er. Roshan" 

    function two(){
        const role = "React Native Mobile App's Developer"
        console.log("User Name :",developer);
        console.log( "Role :",role);
    }
    // console.log(role)
    two();
}
one();


// Scope Level code - 2 
if(true){
    const username = "Roshan"
    if(username === "Roshan"){
        const website = " www.roshanbhuskute.com"
        // console.log(`user : ${username} \nPortfolio : ${website}`);
    }
    // console.log(website);
}
// console.log(username);


// Hoisting code - 2 
// console.log(addone(5));
function addone(num){
    return num+1;
}

// addTwo(5) //: ReferenceError: Cannot access 'addTwo' before initialization 
const addTwo = function(num){
    return num + 2;
}
// console.log(addTwo(5));
