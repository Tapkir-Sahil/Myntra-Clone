// "Reduce" to return the value in total value 
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc,curr){
//   console.log(`accumalator ${acc} and current value ${curr}`)
//   return acc+curr
// },0)
// console.log(myTotal);

const myTotal = myNums.reduce((acc, cur) => acc + cur, 0) //Shortcut for same above process
// console.log(myTotal)

const shoppingCart = [
  {
    name: 'js',
    price: 1000
  },
  {
    name: 'py',
    price: 2000
  },
  {
    name: 'java',
    price: 3000
  },
  {
    name: 'c++',
    price: 4000
  },
]

const cartPrices = shoppingCart.reduce((acc, item) => {
  return acc + item.price
}, 0)

// const cartPrices = shoppingCart.reduce((acc,item)=> acc + item.price,0) // shortcut for above "reduce"
// console.log(cartPrices)

const nested = [[1, 2], [3, 4], [5]]

const arr = nested.reduce((acc, item) => {
  // acc = acc.concat(item) different way
  return acc.concat(item)
}, [])
// console.log(arr)

const names = ['sahil', 'raj', 'sahil', 'elon']

const nameCount = names.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1
  // acc = acc.concat((acc[curr] || 0) + 1) // This Gives TypeError "acc.concat is not a function" 
  return acc
}, {})

console.log(nameCount)


//Iterations Are Finished 