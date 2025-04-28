// For In loop for objects

const myObj = {
  js : "JavaScript",
  py : "Python",
  java : "Java",
  swift : "Swift",
}

for (const key in myObj) {
  // console.log(`Keys :${key} And There Owner ${myObj[key]}`)
}

const programming = ["Javascript","Python","Java","C++"]

for(const key in programming){
  // console.log(`My arrays are ${programming[key]}`)
}

const map = new Map();
map.set("IN","INDIA")
map.set("JAP","JAPAN")
map.set("AU","AUSTRALIA")
map.set("USA","AMERICA")

for (const key in map) {
  console.log(`map keys are ${key}`)
  console.log(key)
}