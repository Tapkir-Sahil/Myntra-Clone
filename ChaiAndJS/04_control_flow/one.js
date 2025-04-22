// If control flow

// user = true
// if (!user){
//   console.log("hello world");
// }else{
//   console.log("Hello World")
// }

// const score = 200;
// if (score <= 100){
//   let power = "Fly";
//   console.log(`congrats you got more score than expected so you got power :${power}`)
// }else{
//   let power = "Run"
//   console.log(`score more than 200 if not you power is ${power}`)
// }

// const balance = 600
// if(balance >= 1000){
//   console.log("congrats your balance is 1000")
// }else if(balance > 750){
//   console.log("balance is above 750")
// }else if(balance > 500){
//   console.log("balance is above 500")
// }else{
//   console.log("Work hard")
// }

const username = true
const userPass = true
const gmailLogin = true
const emailLogin = false

if(userPass && username){
  console.log("password match")
  if(gmailLogin){
    console.log("Welcome User")
  }
}

if (emailLogin || username){
  console.log("U can shop")
}