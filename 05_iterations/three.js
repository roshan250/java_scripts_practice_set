//---------> For of
const Num = [1, 2, 3, 4, 5]
for (const val of Num) {
    // console.log(val);
}

const name = "Hello Roshan"
for (const element of name) {
    if (element == " ") {
        continue;
    }

    if (element == "R") {
        break;
    }

    // console.log(`Elemnts is ${element}`);
}

//---------> Map

const mymap = new Map()
mymap.set('IN', "india")
mymap.set('USA', "United States of America ")
mymap.set('Fr', "France")

for (const [ k, v] of mymap) {
  console.log(k +"-->"+ v);  
}

// objects is not itretable 

