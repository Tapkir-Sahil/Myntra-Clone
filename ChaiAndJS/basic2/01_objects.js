// There are two types of object first one is singleton which is declare using constructor and the second one is literals there simply declare 

// Literals objects 

const mySymbol = Symbol('key')

const jsUser = {
  name: "sahil",
  age: 23,
  location: "pune",
  email: "sahil@gmail.com",
  loginStatus: true,
  lastLogin: ['monday', 'saturday'],
  [mySymbol]: 'key',
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser[mySymbol])
console.log(typeof (mySymbol))

jsUser.email = "sahil@google.com"
console.log(jsUser.email)
// Object.freeze(jsUser) // This method freeze/Stop the given object it does not allow to update object anymore
jsUser.email = "sahil@microsoft.com"
console.log(jsUser.email)
console.log(jsUser)

jsUser.greetings = function(){
  console.log("Hello World")
}

jsUser.hello = function(){
  console.log(`Hello ${this.name}`)
}

console.log(jsUser.greetings())
console.log(jsUser.hello())