// Declarations (var, let, const)
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Declarations */

// var
var number;
var number // Automatic semicolon insertion (ASI)
var number = 10 // int number = 10; (C language)

// multiple declaration
var x, y, z
console.log(x) //=> undefined
console.log(y) //=> undefined
console.log(z) //=> undefined

var a = 1, b = 2, c = 3
console.log(a); //=> 1
console.log(b); //=> 2
console.log(c); //=> 3

// let
let number = 10
console.log(number) //=> 10

// const
const NUMBER = 10
NUMBER = 100 // TypeError
console.log(NUMBER) //=> 10

//  dynamic type
let number = 10
console.log(number) //=> 10
console.log(typeof number) //=> number

number = 'fulano'
console.log(typeof number) //=> string
console.log(number) //=> 'fulano'

// Case Sensitive
let number = 8
let NUmber = 80

// identifier pattern
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Variables
let 0number //SyntaxError (^\W)
let %number //SyntaxError (^\W)
let var //SyntaxError (keyword)
let function //SyntaxError (keyword)
let number
let _number
let $number

// hoisting
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Variable_hoisting
nome = 'fulano'
console.log(nome) //=> 'fulano'

console.log(outroNome) // ReferenceError
outroNome = 10

console.log(outroNome) // undefined
let outroNome = 10
