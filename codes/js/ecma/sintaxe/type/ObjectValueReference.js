/**** Reference / Value ****/
// Primitives values (boolean, null, undefined, number, string, symbol)
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Primitive_values
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Data_structures_and_types

// Primitives values are passed by value
let variable = 10
let variable_temp = variable // copy value
console.log(variable) //=> 10
console.log(variable_temp) //=> 10
variable = 100
console.log(variable) //=> 100
console.log(variable_temp) //=> 10

let variable = new String("lorem ipsum")
let variable_temp = variable  // copy value
console.log(variable) //=> [String: 'lorem ipsum']
console.log(variable_temp) //=> [String: 'lorem ipsum']
variable = 10
console.log(variable) //=> 10
console.log(variable_temp) //=> [String: 'lorem ipsum']

// Object values are passed by reference
let ip = {address: '192.168.0.2'}
let ip_home = ip // copy reference
console.log(ip) //=> { address: '192.168.0.2' }
console.log(ip_home) //=> { address: '192.168.0.2' }
ip_home.version = 4
console.log(ip) //=> { address: '192.168.0.2', version: 4 }
console.log(ip_home) //=> { address: '192.168.0.2', version: 4 }
ip_home.address = '192.168.0.3'
console.log(ip) //=> { address: '192.168.0.3', version: 4 }
console.log(ip_home) //=> { address: '192.168.0.3', version: 4 }

// clone
let ip = {address: '192.168.0.2'}
// let ip_clone = JSON.parse(JSON.stringify(ip)) // copy value
let ip_clone = Object.assign({}, ip) // copy value ES6
console.log(ip) //=> { address: '192.168.0.2' }
console.log(ip_clone) //=> { address: '192.168.0.2' }
ip_clone.version = 4
console.log(ip) //=> { address: '192.168.0.2' }
console.log(ip_clone) //=> { address: '192.168.0.2', version: 4 }
