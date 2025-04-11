let bigNumber = 568451543543154654n
console.log(typeof(bigNumber));

/*
There are two types of data "PRIMITIVE AND NON-PRIMITIVE/REFERENCES TYPE"

Primitive datatypes create a new copy of variable in stack which are not related to each other while changes made in variable of copy does not reflect to original.
Data Types are: "string,number,boolean,bigint,symbol,null,undefined "
Non-Primitive does not create a new copy instead it refer a value to a new copy variable from stack to heap non-primitive are store in heap which is for referal for variable in stack while changes made in copy does reflect to original.
Data Types are: "objects,array,functions"
*/

// let userOne = "Hello"
// let userTwo = userOne;
// console.log(userTwo);
// userTwo = "world";
// console.log(userOne)
// console.log(userTwo);

// let objOne = {
//   id : 1,
//   name : "Hello",
// }
// let objTwo = objOne;
// console.log(objOne);
// console.log(objTwo)
// objTwo.name = "Hello World";
// console.log(objOne);
// console.log(objTwo);


//Creating a new string with other method and exploring its method
let h1 = 'sahil'
console.log(h1)
let gameName = new String('Polly')
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName)

let newStr = gameName.substring(0,2);
console.log(newStr);