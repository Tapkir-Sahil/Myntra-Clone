// For Each Loop 

const arr = ["JavaScript","Java","Python","C++"]

// Using Normal Function in "For Each Loop"
arr.forEach(function(val){ 
  // console.log(val)
})

// Using Arrow Function In "For Each Loop"
arr.forEach((items)=>{ 
  // console.log(`ForEach Using Arrow Function ${items}`)
})

// Using Function Call In "ForEach Loop"
function printme(item){
  // console.log(`This is using function call in for each ${item}`)
}
arr.forEach(printme)

// Using "ForEach Loop" For printing Item, Index, Array
arr.forEach( (item, index, arry) => {
  // console.log(item, index, arry)
})

// Using "ForEach loop" For printing Items From Objects In Array
const programming = [
  {
    programName : "Javascript",
    extension : "js"
  },
  {
    programName : "Python",
    extension : "py"
  },
  {
    programName : "C++",
    extension : "cpp"
  },
]

programming.forEach((items)=>{
  console.log(items.extension)
})