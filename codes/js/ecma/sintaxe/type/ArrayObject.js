// Array
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals

// Literal
let numbers = [1, 2, 4, 7]
console.log(numbers)    //=> [ 1, 2, 4, 7 ]

// Array Object
let numbers = Array(1, 2, 4, 7)
console.log(numbers)    //=> [ 1, 2, 4, 7 ]

// OO
let numbers = new Array(1, 2, 4, 7)
console.log(numbers)    //=> [ 1, 2, 4, 7 ]

let numbers = new Array(3)
console.log(numbers)    //=> [ , ,  ]
numbers[0] = 1
numbers[1] = 2
numbers[2] = 3
console.log(numbers)    //=> [ 1, 2, 3 ]

/**** ARRAY METHODS ****/
// Array.from
Array.from([1, 2, 3])


/**** ARRAY INSTANCES ****/
// Array.prototype.length
[1, 2, 3].length

// Mutator: pop, push, reverse, shift, unshift, sort, splice
// Array.prototype.push
let numbers = [1, 2, 3]
console.log(numbers.push(4))    //=> 4
console.log(numbers)            //=> [ 1, 2, 3, 4 ]

// Array.prototype.unshift
let numbers = [1, 2, 3]
console.log(numbers.unshift(0)) //=> 4
console.log(numbers)            //=> [ 0, 1, 2, 3 ]

// Array.prototype.pop
let numbers = [1, 2, 3]
console.log(numbers.pop())      //=> 3
console.log(numbers)            //=> [ 1, 2 ]

// Array.prototype.shift
let numbers = [1, 2, 3]
console.log(numbers.shift())    //=> 1
console.log(numbers)            //=> [ 2, 3 ]

// Array.prototype.reverse
let numbers = [1, 2, 3]
console.log(numbers.reverse())  //=> [ 3, 2, 1 ]
console.log(numbers)            //=> [ 3, 2, 1 ]

// Array.prototype.sort
let numbers = [3, 1, 2]
console.log(numbers.sort())     //=> [ 1, 2, 3 ]
console.log(numbers)            //=> [ 1, 2, 3 ]

// Array.prototype.splice
let numbers = [1, 2, 3]
console.log(numbers.splice(1, 2)) //=> [ 2, 3 ]
console.log(numbers)              //=> [1]

// Accessor: includes, join, concat, slice
// Array.prototype.includes
console.log([1, 2, 3].includes(1)) //=> true

// Array.prototype.join
console.log([1, 2, 3].join(' '))   //=> '1 2 3'

// Array.prototype.slice
console.log([1, 2, 3].slice(1,2))  //=> 2

// Array.prototype.concat
console.log([ 1, 2].concat([ "hello", true, 7 ])) //=> [ 1, 2, 'hello', true, 7 ]

// Iteration: forEach, reduce, filter, map, every, some, find, reduceRight,
//            entries, keys, values

// Array.prototype.entries
for([key, value] of [1,2,3].entries()){console.log(`${key} => ${value}`)}
//=>
// '0 => 1'
// '1 => 2'
// '2 => 3'

// Array.prototype.forEach
[1, 2, 3].forEach(function(value){console.log(value)})
[1, 2, 3].forEach((value) => console.log(value))
[1, 2, 3].forEach(value => console.log(value))
//=>
// '1'
// '2'
// '3'

[1, 2, 3].forEach(function(value, index){console.log(value+' '+index)})
[1, 2, 3].forEach((value, index) => console.log(value+' '+index))
//=>
// '0 => 1'
// '1 => 2'
// '2 => 3'

// Array.prototype.map
console.log([1, 2, 3, 4, 5, 6].map(function(value){ value * 2}))
console.log([1, 2, 3, 4, 5, 6].map((value) => value * 2))
      //=> [ 2, 4, 6, 8, 10, 12 ]

// Array.prototype.reduce
console.log([1, 2, 3, 4, 5, 6].reduce((addition, value) => addition + value))
      //=> 21

// Array.prototype.reduceRight
console.log([1, 2, 3, 4, 5, 6].reduceRight((addition, value) => addition + value))
      //=> 21

// Array.prototype.filter
console.log([1, 2, 3, 4, 5, 6].filter((value) => value % 2 == 0))
      //=> [ 2, 4, 6 ]

// Array.prototype.find
console.log([1, 2, 3, 4, 5, 6].find((value) => value % 2 == 0))
      //=> 2

// Array.prototype.every
console.log([1, 2, 3, 4, 5, 6].every((value) => value % 2 ==0))
      //=> false
console.log([2, 4, 6].every((value) => value % 2 ==0))
      //=> true

// Array.prototype.some
console.log([1, 2, 3, 4, 5, 6].some((value) => value % 2 == 0))
      //=> true
