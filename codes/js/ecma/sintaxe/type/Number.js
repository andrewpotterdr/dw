// Number
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Numeric_literals
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Integers
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Floating-point_literals

// Literal 15
console.log(15) // decimal
console.log(017) // octal
console.log(0o17) // octal ecma6
console.log(0O17) // octal
console.log(0b1111) // binary ecma6
console.log(0B1111) // binary ecma6
console.log(0xf) // hexa
console.log(0Xf) // hexa
console.log(0XF) // hexa
console.log(-15) // negative

// [(+|-)][digits][.digits][(E|e)[(+|-)]digits] http://json.org/number.gif
console.log(3.1) //=> 3.1
console.log(3.14) //=> 3.14
console.log(-3.14) //=> -3.14
console.log(.14) //=> 0.14
console.log(-.14) //=> -0.14
console.log(3.1E-12) //=> 0.0000000000031
console.log(3.1e+12) //=> 3100000000000
console.log(-3.1e+12) //=> -3100000000000

// IEEE 754
console.log(1.4 - 1.2) //=> 0.19999999999999996
