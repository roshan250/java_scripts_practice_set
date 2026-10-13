// let myName = "Hitesh     "
// let mychannel = "chai   "
// console.log(myName.trim().length)

let myHero =  ["thor", "spiderman"];

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log('hitesh is present in all object');
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`)
}

// heroPower.hitesh()
// myHero.hitesh()
// myHero.heyHitesh();
// heroPower.heyHitesh();


// Inheritence

const User = {
    name : "chai",
    email : "cjai@google.com"
}

const Teacher ={
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASUpport = {
    makeAssignment:'JS Assifnment',
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// in new code bases we use diffrent way proto using setPrototypeOf
Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUsername = "ChaiAurcode      "
String.prototype.trueLength = function(){
    // console.log(`${this}`);
    // console.log(`${this.name}`)
    console.log(`True lrngth is: ${this.trim().length}`);
}
anotherUsername.trueLength();
"Roshan Bhuskute".trueLength();
