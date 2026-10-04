// reverdse number
// let str = "Roshan";
// // let reversed = "";

// // for(let i = str.length-1; i>=0 ; i--){
// //     reversed += str[i];
// // }
// // console.log(reversed)



// Palindrome
// let str = "ROshan"
// let reverdse = ""

// for(let i = str.length-1; i>=0; i-- ){
//     reverdse += str[i] 
// }

// if(str === reverdse){
//     console.log("Palindrome")
// }
// else{
//      console.log("not Palindrome")
// }


// Find even and odd
// let arr = [1,2,3,4,5,6,7]

// for(let i=0; i<=arr.length-1;i++ ){
//     if(arr[i] % 2 ===0){
//         console.log(arr[i]+" is even")
//     }else
//     {
//         console.log(arr[i]+" is odd")
//     }
// }



// find the larget number 

// let arr = [10,50, 90,2,1];

// let larget= arr[0];

// for(let i=1;i<arr.length;i++){
//     if(arr[i] > larget){
//         larget =arr[i]
//     }
// }
// console.log("thi is larget value in this aaray "+larget)





// find the smallet number 

// let arr = [1,10,50, 90,2,2,1];

// let smallet = arr[0];

// for(let i=0;i<arr.length;i++){
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//         console.log(arr[i]);
//         break;
//     }
//     }
// }
// console.log("this is smallest value in this aaray "+smallet)


//remove dupliacted number from array 

let arr = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(arr)];
// console.log(unique)

const getUsers = async () => {
  try {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
};

getUsers();