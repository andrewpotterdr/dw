// String Object
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#String_literals
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// Primitive
let string = 'lorem ipsum'
console.log(string) //=> 'lorem ipsum'
console.log(typeof string) //=> string

// String
let string = String('lorem ipsum')
console.log(string) //=> 'lorem ipsum'
console.log(typeof string) //=> string

// OO
let string = new String('lorem ipsum')
console.log(string) //=> [String: 'lorem ipsum']
console.log(typeof string) //=> object

/**** STRING METHODS ****/
// String.fromCharCode()
console.log(String.fromCharCode(65)) //=> A

// String.fromCharPoint()
console.log(String.fromCodePoint(48)) //=> 0
console.log(String.fromCodePoint(65)) //=> A
console.log(String.fromCodePoint(97)) //=> a

/**** STRING INSTANCES ****/
// String.prototype.length (Property)
console.log("lorem ipsum".length) //=> 11
console.log(String("lorem ipsum").length) //=> 11
console.log(new String("lorem ipsum").length) //=> 11

// String.prototype.includes
console.log("lorem ipsum".includes('lorem')) //=> true

// String.prototype.repeat
console.log("hello".repeat(3)) //=> 'hellohellohello'

// String.prototype.starstWith
console.log("lorem ipsum".startsWith('lorem')) //=> true

// String.prototype.endsWith
console.log("lorem ipsum".endsWith('ipsum')) //=> true

// String.prototype.substr
console.log("lorem ipsum".substr(1,2)) //=> 'or'

// String.prototype.substring
console.log("lorem ipsum".substring(1,2)) //=> 'o'

// String.prototype.slice
console.log("lorem ipsum".slice(-1)) //=> 'm'
console.log("lorem ipsum".slice(1,-1)) //=> 'orem ipsu'

// String.prototype.split
console.log("lorem ipsum".split('')) //=> [ 'l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm' ]
console.log("lorem ipsum".split(' ')) //=> [ 'lorem', 'ipsum' ]
console.log("lorem ipsum dolor".split(' ', 1)) //=> [ 'lorem' ]

// String.prototype.toLowerCase
console.log('LOREM IPSUM'.toLowerCase()) //=> 'lorem ipsum'

// String.prototype.toUpperCase
console.log("lorem ipsum".toUpperCase()) //=> 'LOREM IPSUM'

// String.prototype.match
console.log("lorem ipsum".match(/\w+/g)) //=> [ 'lorem', 'ipsum' ]

// String.prototype.replace
console.log("lorem ipsum".replace('lorem', 'LOREM')) //=> 'LOREM ipsum'

// String.prototype.search
console.log("lorem ipsum".search('lorem')) //=> 0

// String.prototype.trim
console.log("  lorem  ipsum  ".trim()) //=> 'lorem  ipsum'
