function sayMyName(){
  // console.log('Hello')
  // console.log('My')
  // console.log('King')
  // console.log('Sahil')
}

sayMyName() // A funtion with parenthesis is function call 
//saymyName : A funtion without parenthesis is reference to that functions

function addTwoNum(num1, num2){
  // const result = num1 + num2
  // console.log(result)
  return num1 + num2;
}


// console.log(addTwoNum(1 , 4))

function loggedIn(username = "Guest"){
  if(!username){
    console.log("please enter username");
    return 
  }
    return `Welcome: ${username}`
}

// console.log(loggedIn("Sahil"))

// Adding multiple number in one parameter using "rest" method()

function multipleValue(...num){ // ...num is "rest Method when ... is used in function or in parameter is called as rest method"
  return num
}

// console.log(multipleValue(200,300,500))

/// Object in functions

const user = {
  name : "Sahil",
  location : "India"
}

function handleObject(anyobject){
  // console.log(`Name :${anyobject.name} And Location :${anyobject.location}`)
}

// handleObject(user)
handleObject({
  name : 'Sahil',
  location : 'IND'
})

// Handling Array in Functions

const myarray = [100,200,300,400,500];

function callArray(arr){
  console.log(arr[1])
}

// callArray(myarray)
callArray([200,100,300,400,500])