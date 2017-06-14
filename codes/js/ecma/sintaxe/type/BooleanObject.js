// Boolean
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Boolean_literals
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

// Primitive
let variable = false
console.log(variable) //=> false
console.log(typeof variable) //=> boolean

// Boolean
let variable = Boolean(false)
console.log(variable) //=> false
console.log(typeof variable) //=> boolean

let variable = Boolean("")
console.log(variable) //=> false
console.log(typeof variable) //=> boolean

// OO
let variable = new Boolean(false)
console.log(variable) //=> [Boolean: false]
console.log(typeof variable) //=> object
