const regularUser = {
    email : "roshanbhuskute.com",
    fullname : {
        userfullname : {
            firstName : "hitesh",
            lastName : "Chaudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1,obj2,obj3}
// console.log(obj4)

//const obj4 = Object.assign(obj1,obj2,obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4)

const course = {
    courseName : "js in hindi",
    price : "999",
    courseCreator : "hitesh"
}

const {courseCreator } =course
console.log(courseCreator);

//  {
//     "courseName" : "js in hindi",
//     "price" : "999",
//     "courseCreator" : "hitesh"
// }
