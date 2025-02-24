const sculptureList = require('./data.js'); // import data.js

//const element = sculptureList[1] // <---- comment out this line in your solution!


// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
//for (const key in element){
//    console.log(`${key}: ${element[key].length}`)

const sculptureListLengths = {};

//Loops the whole list
for (const index in sculptureList) {
    const sculpture = sculptureList[index];//gets each item
     const lengthObject = {};

  //for each key it itterates to name, aritist...
  for (const key in sculpture) {
    const value = sculpture[key];

        if (typeof value === 'string' || Array.isArray(value)) {
        lengthObject[key] = value.length;  //value.replace(/\s/g, '').length; to remove spaces name: 23
        //I am a bit confused on why the result of the first key should be name: 24, with spaces it is 26 amd without it is 23
        } 
        else {
        lengthObject[key] = null; //False if not string for error handle
        }
  
    }

  //keeps as a obj and merge
  Object.assign(sculptureListLengths, { [index]: lengthObject });
}

//result
console.log(sculptureListLengths);
