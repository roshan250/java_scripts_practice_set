//Array map method

// let arr = [45,23,21]

// let a = arr.map((value, index, array)=>{
//     console.log(value, index, array)
//     return value+1
// })

// console.log(a)


//Array filter method
let arr2 = [23,45,15,44,78,10]
let a2 = arr2.filter((a)=>{
    return a<50
})
// console.log(a2)

// Array reduce method
let arr3 = [1,2,3,4,5,1,2]
let newarr3 = arr3.reduce((h1,h2)=>{
return h1+h2
})
// console.log(newarr3)
console.log("Print Before");

function getData(dataId){
    setTimeout(()=>{
        console.log("data",dataId);
    }, 5000);
}

getData(1);
getData(2);
getData(3);

console.log("Print After");

