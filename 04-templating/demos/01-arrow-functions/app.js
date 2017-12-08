'use strict'

let globalThis = this
function foo() {
  console.log('global this', globalThis)
  console.log('function scoped this', this)
}

function logger(input) {
  return console.log('user logged:', input)
}

let logger = (input) => {
  // arrow function create NO function scope
  console.log('this', this) // => this refers to the global window object
  return console.log('user logged:', input)
}

// return keyword is still there, it's just implied by the language
let logger = (input) => console.log('user logged:', input)
// parens not necessary if only one param
let logger = input => console.log('user logged:', input)

// empty parens for no params
let foo = () => 'hello world'


// functions with mulitple params
let arr = [1, 2, 3, 4]
// arr.forEach(function(ele, idx, arr) {
//   arr[idx] * 2
// })
arr.forEach((ele, idx, arr) => arr[idx] * 2)

// arr.sort(function(a, b) {
//   return b - a
// })
arr.sort((a, b) => b - a)