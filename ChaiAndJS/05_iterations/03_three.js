// for of in for loop for objects arrays

// [" "," "," "]
// [{},{},{}]

const arr = [10,20,30,40,50,60]

for (const i of arr) { // Does nothing directly fetch the value from array instead of doing "arr[i]"
  console.log(i)
}

// for(let i = 0; i < arr.length;i++){
//   console.log(arr[i])
// }

const greetings = "helloworld"
for (const i of greetings) {
  console.log(i)
}

// MAP
const map = new Map()
map.set('IN','India')
map.set('USA','America')
map.set('JAP','Japan')
map.set('AUS','Australia')
map.set('EU','Europe')

console.log(map)

// for of "for map types"

for (const [keys,value] of map) {
  console.log(`Keys:${keys} And Value:${value}`)
}

const myObject = {
  game1 : "BGMI",
  game2 : "COD",
  game3 : "FF",
}

// for(const [keys,value] of myObject){
//   console.log(keys, ':-', value)
// }