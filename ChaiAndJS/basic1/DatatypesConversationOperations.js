'use strict'
// Type of null is "Object"  and Type of undefined is "Undefined"


/*For Number : 
The value which is converted in number but it is in string then the output will be NaN(Not a Number) but if the value is NUll the it will convert it into object (remember converstions will convert another value into number but check whether the value is change or not)
*/
console.log("For Number :")
console.log(3+3)
let score = "33abc"
console.log(typeof(score));
let valueNumber = Number(score);
let score_number = valueNumber;
console.log(`${score_number} : ${typeof(score_number)}`);
console.log("")

/*For Boolean Value :
When the value is 1 then output is true when value is 0 then value is false same goes to empty, null, undefined, but for -1 and below the boolean value is true.
*/
console.log("For Boolean :")
let value = 1
let booleanValue = Boolean(value);
console.log(booleanValue);
console.log("")

/*For String :
When number is converted into string then that value output is string;
When Boolean is converted into string then that value output is in True or False value;
*/console.log("For String :")
let num = 33;
let strnum = String(num);
console.log(typeof(strnum) + ":" + strnum);
let boolean = Boolean(0);
let strbool = String(boolean);
console.log(typeof(strbool) + ":" + strbool);
console.log("")

/****Operations****/
console.log("Operations :")
console.log(+"")
console.log(null >= 0);
console.log(null <= 0);
console.log(null == 0);
console.log(null > 0);
console.log(null < 0);