// truthy values :- "0", ' ', "false", [], {}, function(){}
// falsy values :- false, 0, -0, "", null, undefined, Nan

const username= []

if(username){
  console.log('value exist')
}else{
  console.log('not exist')
}

if(username.length == 0){
  console.log("Array is empty")
}else{
  console.log("array is not empty")
}

const emptyObj = {
  key : 1
}

if(Object.keys(emptyObj) == 0){
// if(emptyObj.length == 0){
  console.log('obj is empty')
}else{
  console.log('obj is not empty')
}

//Nullish Coalescing operator (??):null defined := this is an operator in which we can switch value if we get null value from server or database

let val1;
// val1 = 10 ?? 20
// val1 = null ?? 20
// val1 = undefined ?? 20
val1 = null ?? 20 ?? 10
console.log(val1)

// Terniary Operator
// condition ? true : false
let iceCream  = 90

iceCream >=90 ? console.log("Milk Icecream") : console.log("Frozen Icecream")
