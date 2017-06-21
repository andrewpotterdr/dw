// Expressions and Operators
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Expressions_and_operators

// Primary expressions (this, function, class, function*, yield, yield*, [], {}, /ab+c/i, ( ))

// Left-hand-side expressions (object.property, new, new.target, super, ...obj)
let obj = {number: 10}
console.log(obj.number)       //=> 10
let numbers = [1, 2, 3]
console.log(...numbers, 4, 5) //=> [1, 2, 3, 4, 5] / spread operator

// Increment and decrement (A++, A--, ++A, --A)
let number = 10
console.log(number++)      //=> 10
console.log(++number)      //=> 12
console.log(number--)      //=> 12
console.log(--number)      //=> 10

// Unary operators (delete, void, typeof, +, -, ~, !)
let numbers = [1, 2, 3]
console.log(numbers)       //=> [ 1, 2, 3 ]
delete numbers[1]
console.log(numbers)       //=> [ 1, , 3 ]
console.log(typeof number) //=> number

let number = 15
console.log(number)  //=>  15
console.log(-number) //=> -15
console.log(+number) //=>  15 01111111111111111111111111111111
// Bitwise NOT
console.log(~number) //=> -16 10000000000000000000000000000000
// Logical NOT
console.log(!number) //=> false

// Arithmetic operators (+, -, *, /, %, **)
console.log(10 + 3)    //=> 13
console.log(true + 3)  //=> 4
console.log(10 - 3)    //=> 7
console.log(1.4 - 1.2) //=> 0.19999999999999996 - IEEE 754
console.log(10 * 3)    //=> 30
console.log(10 / 3)    //=> 3.3333333333333335
console.log(parseInt(10 / 3))   //=> 3
console.log(Math.trunc(10 / 3)) //=> 3 - Integer division
console.log(10 % 3)    //=> 1
console.log(10 ** 3)   //=> 1000
console.log(Math.pow(10, 3))    //=> 1000

// Relational operators (in, instanceof, <, <=, >, >=)
let numbers = [1, 2, 3]
console.log(0 in numbers)          //=> true
console.log(1 in numbers)          //=> true
console.log(3 in numbers)          //=> false
console.log("value" in {value: 1}) //=> true
console.log("PI" in Math)          //=> true
console.log("" instanceof String)  //=> false
console.log(new String() instanceof String) //=> true
console.log(1 < 10)                //=> true
console.log(1 <= 10)               //=> true
console.log(10 > 1)                //=> true
console.log(10 >= 1)               //=> true

// Equality operators (==, !=, ===, !==)
//  Equality: type–converting comparisons
//  Identity/strict equality: strict and type–converting comparisons
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
//  http://dorey.github.io/JavaScript-Equality-Table/
//  false == false, 0, "0", "", [], [0]
console.log(1 == 1)                 //=> true
console.log(1 == "1")               //=> true
console.log(1 == "1a")              //=> false
console.log(1 == true)              //=> true
console.log(0 == false)             //=> true
console.log(false == "")            //=> true
console.log(false == [])            //=> true
console.log(false == null)          //=> false
console.log(false == undefined)     //=> false
console.log({"value":1} == {"value":1}) //=> false
let obj = {"value":1}
console.log(obj == obj)             //=> true
console.log(undefined == undefined) //=> true
console.log(null == null)           //=> true
console.log(NaN == NaN)             //=> false
console.log(Object.is(NaN, NaN))    //=> true
console.log(Object.is([], []))      //=> false / Not comapre Array
console.log(Object.is({}, {}))      //=> false / Not comapre Object

console.log(1 === 1)     //=> true
console.log(1 === "1")   //=> false
console.log("1" === "1") //=> true

// Bitwise shift operators (<<, >>, >>>)
//  Bitwise operators treat their operands as a sequence of 32 bits
//  -(2 ** 32)  até 2 ** 31 - 1
//  -2147483648 até 2147483647
console.log( 9      ) //=> 00000000000000000000000000001001  9
console.log( 9 <<  2) //=> 00000000000000000000000000100100  36
console.log( 9 >>  2) //=> 00000000000000000000000000000010  2
console.log( 9 >>> 2) //=> 00000000000000000000000000000010  2
console.log(-9      ) //=> 11111111111111111111111111110110  9
console.log(-9 >>  2) //=> 11111111111111111111111111111101  -3
console.log(-9 >>> 2) //=> 00111111111111111111111111111101  1073741821

// Binary bitwise operators (&, |, ^)
console.log(9     )   //=> 00000000000000000000000000001001   9
console.log(14    )   //=> 00000000000000000000000000001110  14
console.log(14 & 9)   //=> 00000000000000000000000000000100   8
console.log(14 | 9)   //=> 00000000000000000000000000001111  15
console.log(14 ^ 9)   //=> 00000000000000000000000000000101   7

// Binary logical operators (&&, ||)
//  false == false, 0, "", null, undefined, NaN
console.log(true  && true )     // t && t returns true
console.log(true  && false)     // t && f returns false
console.log(false && true )     // f && t returns false
console.log(false && (3 == 4))  // f && f returns false
console.log("Cat" && "Dog")     // t && t returns "Dog"
console.log(true  && "Cat")     // f && t returns "Cat"
console.log("Cat" && true )     // t && f returns true
console.log(false && "Cat")     // f && t returns false
console.log("Cat" && false)     // t && f returns false
console.log(1     && 2    )     // t && t returns 2
console.log(true  && 2    )     // f && t returns 2
console.log(1     && true )     // t && f returns true
console.log(false && 2    )     // f && t returns false
console.log(1     && false)     // t && f returns false
console.log(""    && false)     // returns ""
console.log(false && ||   )     // returns false
console.log(true  || true)      // t || t returns true
console.log(false || true)      // f || t returns true
console.log(true  || false)     // t || f returns true
console.log(false || (3 == 4))  // f || f returns false
console.log("Cat" || "Dog")     // t || t returns "Cat"
console.log(false || "Cat")     // f || t returns "Cat"
console.log("Cat" || false)     // t || f returns "Cat"
console.log(""    || false)     // t || f returns false
console.log(false || "")        // f || t returns ""
console.log(false && true  || true)   //=> true
console.log(false && (true  || true)) //=> false

let variable
let temp = variable || 10
console.log(temp) //=> 10

let variable = 1
let temp = variable || 10
console.log(temp) //=> 1

// Conditional (ternary) operator (condition ? ifTrue : ifFalse)
console.log(true ? 'true' : 'false') //=> 'true'

// Assignment operators (=, *=, /=, %=, +=, -=, <<=, >>=, >>>=, &=, ^=, |=)

// Destructuring assignment
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// [a, b] = [1, 2] / Array Matching
let [a, b] = [8, 80]
console.log(a) //=> 8
console.log(b) //=> 80

let [a, , b] = [8, 80, 800] // Ignoring some values
console.log(a) //=> 8
console.log(b) //=> 80

let a = 1 // Swapping variables
let b = 3
[a, b] = [b, a]
console.log(a) //=> 3
console.log(b) //=> 1

let [number, string] = [8, 'fulano']
console.log(number) //=> 8
console.log(string) //=> 'fulano'

let [ip, mask = '255.255.255.0'] = ['192.168.0.2'] // Fail-Soft Destructuring
console.log(ip)     //=> '192.168.0.2'
console.log(mask)   //=> '255.255.255.0'

let [ip, mask = '255.255.255.0'] = ['192.168.0.2', '255.255.0.0']
console.log(ip)     //=> '192.168.0.2'
console.log(mask)   //=> '255.255.0.0'

// {a, b} = {a:1, b:2} / Object Matching
let {ip, mask} = {ip: '192.168.0.2', mask: '255.255.255.0'}
console.log(ip)     //=> '192.168.0.2'
console.log(mask)   //=> '255.255.255.0'

// Destructuring Assignment / Deep Matching
let {ip: ipAdd, mask: maskAdd} = {ip: '192.168.0.2', mask: '255.255.255.0'}
console.log(ipAdd)   //=> '192.168.0.2'
console.log(maskAdd) //=> '255.255.255.0'

let {mask: maskAdd, ip: ipAdd} = {ip: '192.168.0.2', mask: '255.255.255.0'}
console.log(ipAdd)   //=> '192.168.0.2'
console.log(maskAdd) //=> '255.255.255.0'

let {mask: maskAdd, ip: ipAdd, ip: ipAdd2} = {ip: '192.168.0.2', mask: '255.255.255.0'}
console.log(ipAdd)   //=> '192.168.0.2'
console.log(ipAdd2)  //=> '192.168.0.2'
console.log(maskAdd) //=> '255.255.255.0'

// Comma operator (,)
let x, y
