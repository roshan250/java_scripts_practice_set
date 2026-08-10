const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} lang is ${myObject[key]}`)
}

//----------> Array in for in
const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
    console.log(`${key} on lang ${programming[key]}`);
}