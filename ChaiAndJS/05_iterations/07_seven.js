//Map deep dive and adding multiple map and filter in one value

const myNum = [10, 20, 30, 40, 50, 60, 70, 80, 90]

const newNums = myNum.map((num) => {
  return num + 10
})

// console.log(newNums)

const newNums2 = myNum
  .map((num) => num + 10)
  .map((num) => num + 1)
  .filter((num) => num > 40)

console.log(newNums2)

