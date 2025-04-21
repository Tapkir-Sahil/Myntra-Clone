const user = {
  username : "Sahil",
  user_Id : 10,

  welcomeUser : function(){
    console.log(this.username,"welcome user");
    console.log(this);
  }
}

// user.welcomeUser()
// user.username="xyz"
// user.welcomeUser()
// console.log(this)

function abc(){
  let userRname = 'hsisbg';
  console.log(this.userRname)
}

abc()

const xyz = function(){
  let name = 'rfbga';
  console.log(this.name)
}

xyz()

const arrow = ()=>{
  let name = 'rfsfjb';
  console.log(this.name)
}

arrow()

const addtwonum = (num1, num2) => {
  return num1 + num2
}
console.log(addtwonum(1,2))

const addtwoNum = (num1, num2) => (num1 + num2)
console.log(addtwoNum(1,4))

const objArrow = () => ({name : "sahil"})
console.log(objArrow())