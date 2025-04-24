//for loop

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if( i == 5){
//     console.log("5 Is Best")
//   }
//   console.log(element)
// }

// For checking inner loop and outer loop

for (let i = 1; i <= 10; i++){
  // console.log(`this is outer loop ${i}`)
  console.log(`this is Table ${i}`)
  for(let j = 1; j <=10 ; j++){
    console.log(`${i}*${j} = ${j*i}`)
  }
}

