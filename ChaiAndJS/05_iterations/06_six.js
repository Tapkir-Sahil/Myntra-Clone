//"ForEach And Filter"

const programming = ["JS","RUBY","PYHTON","JAVA","CPP"]

const values = programming.forEach( (items) => { // ForEach Loop Doesn't return the value
  // console.log(items)
  return items;
})

// console.log(values)// this returns undefined

const numArr = [10,20,30,40,50,60]

const newNum = numArr.filter((num) =>{
  return num > 30
})

console.log(newNum)