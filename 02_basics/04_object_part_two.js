const Doctor =   new Object();

Doctor.id = "dc_001"
Doctor.name = "Rajesh"
Doctor.colification = "MBBS"
Doctor.isLogin = false

// Some Object Methods 
console.log(Doctor);
console.log(Object.keys(Doctor))
console.log(Object.values(Doctor))
console.log(Object.entries(Doctor))

// console.log(Doctor);
const regularUser = {
    email : "roshanbhuskute@gmail.com",
    fullname : {
        userfullname : {
            firstName : "hitesh",
            lastName : "Chaudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName);
// console.log(regularUser.fullname.userfullname.lastName);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname);
// console.log(regularUser);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = { obj1, obj2, obj3 }
// console.log(obj4)

const obj4 = Object.assign({}, obj1, obj2, obj3)
//const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4)

// const course = {
//     courseName : "js in hindi",
//     price : "999",
//     courseCreator : "hitesh"
// }

// const {courseCreator } =course
// console.log(courseCreator);

//  {
//     "courseName" : "js in hindi",
//     "price" : "999",
//     "courseCreator" : "hitesh"
// }
