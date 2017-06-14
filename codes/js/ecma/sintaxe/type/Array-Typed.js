// TypedArray
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals

// From a length
let int8 = new Int8Array(2)
int8[0] = 42
console.log(int8[0]) // 42
console.log(int8.length) // 2
console.log(int8.BYTES_PER_ELEMENT) // 1

// From an array
let arr = new Int8Array([21,31])
console.log(arr[1]) // 31
