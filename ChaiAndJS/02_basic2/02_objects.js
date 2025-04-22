const instaUser = {}
instaUser.name = 'sahil';
instaUser.email = 'sahil@gmail.com'
instaUser.age = 23
// console.log(instaUser)

const regUser = {
  email: "xyz@gmail.com",
  fullname: {
    username: {
      name: "xyz",
      lastname: "abc",
    }
  }
}
// console.log(regUser)
// console.log(regUser.fullname.username.name);

const obj1 = { a: 1, b: 2, c: 3 }
const obj2 = { d: 4, e: 5, f: 6 }
const obj3 = { g: 7, h: 8, i: 9 }
// const obj4 = {obj1, obj2, obj3}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
// const obj4 = {...obj1, ...obj2, ...obj3}
// console.log("objects",obj4)


const user = [
  {
    id: 1,
    email: "1@gmail.com"
  },
  {
    id: 2,
    email: "2@gmail.com"
  },
  {
    id: 3,
    email: "3@gmail.com"
  },
]
// console.log(user[1].email);

// console.log(instaUser)
// console.log(Object.keys(instaUser)) // converts object keys into array
// console.log(Object.values(instaUser))// converts object values into array
// console.log(Object.entries(instaUser))// converts keys and values pair in array like ['name','sahil'], ['id',1]
// console.log(instaUser.hasOwnProperty('email')) // returns true if given key is present in object.
// console.log(instaUser.hasOwnProperty('login'))

//Deconstructor in objects


const course = {
    cname: "CodeAndJS",
    price: "free",
  }
const {cname : courseName} = course;
console.log(courseName)

const MIT = {
  clg1: {
    name: "ACSC",
    class: "Computer Science",
    Id: 19
  },
  clg2: {
    name: "AOE",
    class: "Computer Science",
    Id: 1
  },
}

const {
  clg1:{name:c1},
  clg2:{name:c2}, 
  }= MIT
console.log(c1)
console.log(c2)