let arr = [0,1,2,3,4,5];

//Arrays Method 1:

arr.push(6) // Append the element in end of the array.
arr.push(7)
arr.pop() // Delete the element from end of array.
arr.unshift(-1) // Append the element in start of array NOTE:This is not optimize method.
arr.unshift(0)
arr.shift() // Delete the element from start of the array.
console.log(arr);
console.log(arr.includes(-1)); // Returns the boolean value according to given element is present or not in array.
console.log(arr.includes(-2));
console.log(arr.indexOf(3)); // Returns the index number of an given element it's present if not returns -1.
console.log(arr.indexOf(7));

let newArr = arr.join(); // Returns the bind of an array as a string 
console.log(arr)
console.log(newArr);
console.log(typeof(arr)); // Object
console.log(typeof(newArr)); // String

// slice and splice

let arr2 = [0,1,2,3,4,5,7];
console.log("A", arr2)
console.log(arr2.slice(1,3));
console.log("B", arr2);
console.log(arr2.splice(1,3));
console.log("C",arr2)

// Arrays Method 2:

const marvel_hero = ['ironman','thor','hulk','spiderman'];
const dc_hero = ['superman','batman','flash','aquaman'];

// marvel_hero.push(dc_hero)
// console.log(marvel_hero)
// console.log(marvel_hero[4][1]);

const all_heros = marvel_hero.concat(dc_hero);
console.log(all_heros)

const all_new_heros = [...marvel_hero, ...dc_hero];
console.log('Spread Method',all_new_heros)// By Using Spread method it is to concat and we can add number of array usin "...";

const another_array = [1, 2, 3 ,4, [1, 2, 3], 5, [1, 2, 3, 4, [6, 7]], 8]
console.log(another_array);

const another_real_array = another_array.flat(1)// If we use infinity in .flat method returns full array with no sub/nested array if we use 1 in .flat method it returns removes only 1 level of sub/nested array.
console.log(another_real_array);


console.log(Array.isArray("Kaival"))
console.log(Array.from("Kaival"))
console.log(Array.from({name:'Kaival'})) // returns empty array cause it does not know which value to take in array from object either it is key or value.

let s1 = 100;
let s2 = 200;
let s3 = 300;

console.log(Array.of(s1, s2, s3))