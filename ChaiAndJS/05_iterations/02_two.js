let i =0
while(i<=10){
  console.log(`Value is ${i}`)
  i=i+2
}

let myArr = ['flash','superman','batman']
let arr = 0
while(arr < myArr.length){
  console.log(`array is ${myArr[arr]}`)
  arr++
}

let score = 11
do{
  console.log(`score is ${score}`) // first satisfy this statement then check the while condition so atleast one time this statement will execute
  score++
}while(score<=10)