//"ForEach And Filter"

const programming = ["JS","RUBY","PYHTON","JAVA","CPP"]

const values = programming.forEach( (items) => { // ForEach Loop Doesn't return the value to the containing variable 
  // console.log(items)
  return items;
})

// console.log(values)// this returns undefined bcuz value does not contain any elements

const numArr = [10,20,30,40,50,60]
const newNum = numArr.filter((num) =>{
  return num > 30
})

// console.log(newNum)

//Filter 
//Filter Returns The Value And works on array of objects

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// console.log(books)

let userBooks = books.filter((bk) => bk.genre === 'History')
console.log(userBooks)

let userBK = books.filter( (bk)=>{
  return bk.publish>1995 && bk.genre === 'History'
})
console.log(userBK)