const user = {
    username : "Roshan",
    loginCount: 8,
    signedIn: true,
    getuserDetails: function(){
       // console.log("Got user details from database");
       console.log(`User Name: ${this.username}`);
       console.log(this);
    }
}
console.log(user.username);
console.log(user.getuserDetails());
console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this;
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("chaicode", 12, true);
console.log(userOne);
console.log(userTwo);