//for loop

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if( i == 5){
//     console.log("5 Is Best")
//   }
//   console.log(element)
// }

// For checking inner loop and outer loop
// for (let i = 1; i <= 10; i++){
//   // console.log(`this is outer loop ${i}`)
//   console.log(`this is Table ${i}`)
//   for(let j = 1; j <=10 ; j++){
//     console.log(`${i}*${j} = ${j*i}`)
//   }
// }

//printing Array
let myArr = ['superman', 'batman', 'spiderman', 'ironman']
// for(let i = 0; i < myArr.length; i++){
//   const element = myArr[i];
//   console.log(element)
// }

//break and continue
//break
for(let i = 0; i<myArr.length; i++){
  console.log(myArr[i])
  if(myArr[i] == 'spiderman'){
    break
  }
}

//continue
// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//       console.log(`Detected 5`);
//       continue
//   }
//  console.log(`Value of i is ${index}`);
  
// }
let numArr = [12,34,5,5,78,90,7,654,78,9,7,5565,76,88,654,589,64,7654,5]
for(let i = 0; i < numArr.length; i++){
  const element = numArr[i]
  if(numArr[i] == 5565){
    console.log('hello')
    continue
  }
  if(numArr[i] == 64){
    break
  }
  console.log(element)
}

