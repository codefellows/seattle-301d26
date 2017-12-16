'use strict'

// PURE FUNCTIONS
let userName = 'scott'

function changeName(name) {
  userName = name
} // This is NOT pure; it affects a value outside the scope of this function

function pureChangeName(userName) {
  return `Some new name ${userName}`
}

let arr = [1, 2, 3, 4, 5]

arr.forEach((ele, idx, arr) => arr[idx] = ele * 2)

// IMMUTABILITY v. MUTABILITY
const x = 25
x = 26 // This will throw an error
const y = {}
y.a = 25
y.a = 26 // This will update the value

// FUNCTIONAL ARRAY METHODS

const doctors = [
  { number: 1, actor: 'William Hartnell', begin: 1963, end: 1966 },
  { number: 2, actor: 'Patrick Troughton', begin: 1966, end: 1969 },
  { number: 3, actor: 'Jon Pertwee', begin: 1970, end: 1974 },
  { number: 4, actor: 'Tom Baker', begin: 1974, end: 1981 },
  { number: 5, actor: 'Peter Davison', begin: 1982, end: 1984 },
  { number: 6, actor: 'Colin Baker', begin: 1984, end: 1986 },
  { number: 7, actor: 'Sylvester McCoy', begin: 1987, end: 1989 },
  { number: 8, actor: 'Paul McGann', begin: 1996, end: 1996 },
  { number: 9, actor: 'Christopher Eccleston', begin: 2005, end: 2005 },
  { number: 10, actor: 'David Tennant', begin: 2005, end: 2010 },
  { number: 11, actor: 'Matt Smith', begin: 2010, end: 2013 },
  { number: 12, actor: 'Peter Capaldi', begin: 2013, end: 2013 },
  { number: 13, actor: 'Jodie Whittaker', begin: 2017, end: null},
]


// .filter()
// doctors.filter(/* ele, idx, arr */ => condition)
doctors.filter(ele => ele.begin > 1987)

doctors.filter(ele => ele.begin > 2005 || ele.begin < 1971)

doctors
  .filter(ele => ele.begin > 2005 || ele.begin < 1971)
  .filter(ele => ele.actor.charAt(0) === 'P')

// .map()
// doctors.map(/* ele, idx, arr */ => new return value for that idx in the array)
doctors.map(ele => ({
  name: ele.actor,
  yearsPlayed: ele.end - ele.begin + 1,
}))

doctors.map(ele => {
  let newObj = Object.assign({}, ele)
  newObj.yearsPlayed = newObj.end - newObj.begin + 1
  return newObj
})

doctors.map(ele => {
  let newObj = Object.assign({}, ele)
  newObj.yearsPlayed = newObj.end - newObj.begin + 1
  return newObj
})
.filter(ele => ele.yearsPlayed > 2)

doctors.map(ele => {
  let newObj = Object.assign({}, ele)
  newObj.yearsPlayed = newObj.end - newObj.begin + 1
  return newObj
})
.filter(ele => ele.yearsPlayed > 2)
.sort((a, b) => b.actor - a.actor)


// .reduce()
// doctors.reduce(/* accumulator, current */)
let arr = [1, 2, 3, 4, 5]
arr.reduce((acc, cur) => acc + cur) // => 15

doctors.reduce((acc, curr) => {
  let obj = {}
  obj.name = curr.actor
  obj.yearsPlayed = curr.end - curr.begin + 1
  acc.push(obj)
  return acc
}, [])