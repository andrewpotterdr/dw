// Function
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

// Defining functions / function statement
function addition(param1, param2){
  return param1 + param2
}
// Calling functions
console.log(addition(1))       //=> NaN
console.log(addition(1, 1))    //=> 2
console.log(addition(1, 1, 3)) //=> 2

// Recursion
function factorial(n) {
  return (n == 0)? 1 : n * factorial(n - 1)
}
console.log(factorial(4)) //=> 24

// Scope
var x = 'outside'
function f1(){
  var x = 'inside'
}
console.log(x) //=> 'outside'
f1()
console.log(x) //=> 'outside'

var x = 'outside'
function f1(){
  let x = 'inside'
}
console.log(x) //=> 'outside'
f1()
console.log(x) //=> 'outside'

var x = 'outside'
function f2(){
  x = 'inside'
}
console.log(x) //=> 'outside'
f2()
console.log(x) //=> 'inside'

// Hoisting
console.log(addition(1, 1)) //=> 2
function addition(param1, param2){
  return param1 + param2
}

// Case Sensitive
function addition(param1, param2){
  return param1 + param2
}
function Addition(param){
  return param + 1
}
console.log(Addition(1))    //=> 2
console.log(Addition(1, 2)) //=> 2

// overload
function addition(param1, param2){
  return param1 + param2
}
function addition(param){
  return param + 1
}
console.log(addition(1))    //=> 2
console.log(addition(1, 2)) //=> 2

// Default parameters
function addition(param1, param2=0){
  return param1 + param2
}
console.log(addition(1, 1)) //=> 2
console.log(addition(1))    //=> 1

// Destructuring Assignment
function addition(param1, param2, param3, param4){
  return param1 + param2 + param3 + param4
}
console.log(addition(...[1, 2, 1, 2]))         //=> 6
console.log(addition(...[1, 2], ...[1, 2]))    //=> 6
console.log(addition(...[1, 2], 1, ...[2]))    //=> 6
console.log(addition(...[1, 2], 1, ...[1, 2])) //=> 5

// Named parameters / keyword parameters
function addition({a = 0, b = 0}){
  return a + b
}
console.log(addition({a: 1, b: 1})) //=> 2
console.log(addition({b: 1, a: 1})) //=> 2
console.log(addition({b: 1}))       //=> 1
console.log(addition({}))           //=> 0

// Arguments object / es5
function addition(){
  let summation = 0
  for(let value of arguments){
    summation += value
  }
  return summation
}
console.log(addition(1))          //=> 1
console.log(addition(1, 1))       //=> 2
console.log(addition(1, 1, 1, 1)) //=> 4

// Rest parameters (spread operator) ES6
function addition(...params){
  let summation = 0
  for(let value of params){
    summation += value
  }
  return summation
}
console.log(addition(1))          //=> 1 ([1])
console.log(addition(1, 1))       //=> 2 ([1, 1])
console.log(addition(1, 1, 1, 1)) //=> 4 ([1, 1, 1, 1])

// operato: '+', '*'
function calc(operator, ...params){
  let result = operator == '+' ? 0 : 1
  for(let arg of params){
    result = operator == '+' ? result + arg : result * arg
  }
  return result
}
console.log(calc('+', 1))       //=> 1 ('+', [1])
console.log(calc('+', 1, 1))    //=> 2 ('+', [1, 1])
console.log(calc('*', 1, 1, 1)) //=> 1 ('*', [1, 1, 1])

// Function expression / anonymous function
function(param1, param2){
  return param1 + param2
}

const addition = function(param1, param2){
  return param1 + param2
}
// console.log(addition) // SyntaxError
console.log(addition(1, 2)) //=> 3

const addition = function sum(param1, param2){
  return param1 + param2
}
console.log(addition)       //=> [Function: sum]
console.log(addition(1, 2)) //=> 3
// console.log(sum(1, 2))      //  ReferenceError: sum is not defined

// Immediately Invokable Function Expressions (IIFE)
(function(param1, param2){
  console.log(param1 + param2)
})(1, 2) //=> 3

// method / callback
var ip = {
  address: '192.168.0.1',
  mask: '255.255.255.0',
  toString: function(){
    return `${this.address}/${this.mask}`
  }
}
console.log(ip.address)    //=> '192.168.0.1'
console.log(ip.toString()) //=> '192.168.0.1/255.255.255.0'

// Closure
function multiplier(factor){
  return function(number){
    return number * factor
  }
}
var twice = multiplier(2)
console.log(twice(5)) //=> 10

// Nested functions and closures
function addSquares(a,b) {
  function square(x) {
    return x * x
  }
  return square(a) + square(b)
}
// console.log(squares(2,3)) // ReferenceError
console.log(addSquares(2,3)) //=> 13
console.log(addSquares(3,4)) //=> 25
console.log(addSquares(4,5)) //=> 41

// es6 Arrow Function (=>)
const sum = function(param1, param2){
  return param1 + param2
}

const sum = (param1, param2) => {
  return param1 + param2
}
const sum = (param1, param2) => { return param1 + param2 }
const minus = (param1, param2) => param1 - param2
const double = number => number * number
console.log(sum(2, 2))    //=> 4
console.log(minus(2, 2))  //=> 0
console.log(double(2, 2)) //=> 4

console.log([1,1,1].reduce(function(sum,value){return sum+value}, 0)) //=> 3
console.log([1,1,1].reduce((sum,value) => sum+value)) //=> 3

// higher-order function
//  http://eloquentjavascript.net/05_higher_order.html#h_xxCc98lOBK
//  Functions that operate on other functions, either by taking them as arguments
//  or by returning them, are called higher-order functions
const animals = [
  { name: 'Waffles',  type: 'dog', age: 12 },
  { name: 'Fluffy',   type: 'cat', age: 14 },
  { name: 'Spelunky', type: 'dog', age: 4  },
  { name: 'Hank',     type: 'dog', age: 11 },
]
let oldDogNames = animals
  .filter(x => x.age > 10 && x.type === 'dog')
  .map(x => x.name)
console.log(oldDogNames) //=> [ 'Waffles', 'Hank' ]
let totalDogYears = animals
  .filter(x =>  x.type === 'dog')
  .map(x => x.age)
  .reduce((prev, cur) => prev + cur, 0)
console.log(totalDogYears) //=> 27
