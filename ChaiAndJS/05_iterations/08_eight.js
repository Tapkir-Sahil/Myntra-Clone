// "Reduce" to return the value in total value 
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc,curr){
//   console.log(`accumalator ${acc} and current value ${curr}`)
//   return acc+curr
// },0)
// console.log(myTotal);

const myTotal = myNums.reduce((acc,cur) => acc+cur,0) //Shortcut for same above process
// console.log(myTotal)

const shoppingCart = [
  {
    name : 'js',
    price : 1000
  },
  {
    name : 'py',
    price : 2000
  },
  {
    name : 'java',
    price : 3000
  },
  {
    name : 'c++',
    price : 4000
  },
]

const cartPrices = shoppingCart.reduce((acc,item) => {
  return acc + item.price
},0)

// const cartPrices = shoppingCart.reduce((acc,item)=> acc + item.price,0) // shortcut for above "reduce"
console.log(cartPrices)