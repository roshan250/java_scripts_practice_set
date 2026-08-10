// Immediately Invoked Function Expressions [IIFE]

//Named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})(); // use ; when back to back use IIFE 

// Nameless IIFE
( (db_name) => {
    console.log(`DB CONNECT TO ${db_name}`);
})('Roshan-DB')

console.log(this)

