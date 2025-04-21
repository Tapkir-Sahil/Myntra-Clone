let a = 10
if(true){
  let a = 100
  // const b = 200
  // var c = 300
  // console.log("Inner :",a);
  
}

// console.log("Outer :",a)
// console.log(b)
// console.log(c)


function one(){
  const name = "Kaival"
  // console.log(name);
  function two(){
    const  website = "portfolio"
    const name = "Sahil";
    // console.log(name)
    // console.log(website)
  }
  two()
}

one()


if(true){
  const username = "Sahil"
  if(username){
    const website = "Portfolio"
    // console.log(username)
    // console.log(`${username} ${website}`)
  }
}

// console.log(addOne(5))// we can use this function anywhere even before and after intiailization
function addOne(num){
  return num + 1
}

// console.log(addTwo(5)) // Cannot access 'addTwo' before initialization we have to use this function after intiailization
const addTwo = function(num){
  return num + 2
}


function Outer(){
  const a = "Hello"
  function Inner(){
    // console.log(a,"World")
  }
  // Inner() // If we dont return the inner function it will not remember and the function is destroy when it executed 
  return Inner // But we return the function inner to the outer in this case the inner() is directly return to outer() so it will remember the value that is return to function so we can have that backup after executing the function
}

const greet = Outer() //this technique is called closure
greet()

function counter(){
  let count = 0;
  return function countFun(){// returns the count and remember it so NO one can ouside can change count but return function can
    count ++
    console.log("count: ",count)
  }
}

const increment = counter()
increment()
increment()
increment()