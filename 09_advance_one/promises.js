const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve();
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 reolved");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user)
})

const PromiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ user: "Roshan", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

PromiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("the promise either resolve or reject"))



const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "JavaSript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     } 
// }
// getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => { 
        return response.json()
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((error) => console.log(error))
    