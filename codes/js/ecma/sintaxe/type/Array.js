// Array
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals

// Create an Array []
let numbers = [1, 2, 4, 7]
console.log(numbers[0]) //=> 1
console.log(numbers[3]) //=> 7
console.log(numbers[4]) //=> undefined
console.log(numbers)    //=> [ 1, 2, 4, 7 ]

// Changing Array
let numbers = [1, 2, 4, 7]
// changing value
numbers[2] = 5
// loading element
numbers[4] = 10
console.log(numbers) //=> [ 1, 2, 5, 7, 10 ]
delete numbers[4]
console.log(numbers) //=> [ 1, 2, 5, 7,  ]

// Defining Empty Array
let numbers = []
numbers[0] = 10
numbers[1] = 20
numbers[10] = 100
console.log(numbers) //=> [ 10, 20, , , , , , , , , 100 ]

// accessing array elements
console.log(numbers[0])  //=> 10
console.log(numbers[1])  //=> 20
console.log(numbers[2])  //=> undefined
console.log(numbers[10]) //=> 100
console.log(numbers)     //=> [ 10, 20, , , , , , , , , 100 ]

// multiple types
let values = [1, 'fulano', true, null, [1, 2]]
console.log(values[1])    //=> 'fulano'
console.log(values[4])    //=> [1, 2]
console.log(values[4][1]) //=> 2

// string index
let values = []
values[0] = 1
values['number'] = 10
values[1] = 20
console.log(values) //=> [ 1, 20, number: 10 ]

// n dimentions
let students = []
students[0] = [1, 'fulano', 'fulano@gmail.com']
students[1] = [2, 'sicrano', 'sicrano@gmail.com']
console.log(students[0][2]) //=> 'fulano@gmail.com'
console.log(students)       //=> [ [ 1, 'fulano', 'fulano@gmail.com' ], [ 2, 'sicrano', 'sicrano@gmail.com' ] ]

let students = []
students[0] = []
students[0]['id'] = 1
students[0]['name'] = 'Fulano'
students[0]['email'] = 'fulano@gmail.com'
console.log(students[0]['email']) //=> 'fulano@gmail.com'
console.log(students[0].email)    //=> 'fulano@gmail.com'
console.log(students)             //=> [ [ id: 1, name: 'Fulano', email: 'fulano@gmail.com' ] ]

// spread operator
let numbers = [1, 2, 3]
console.log([...numbers, 4, 5])   //=> [ 1, 2, 3, 4, 5 ]

// interaction: for, for..of, for..in, for([key, value] of [].entries())
let numbers = [1, 2, 4, 7]
let result = ''
for(let flag = 0; flag < numbers.length; flag++) {
  result += numbers[flag]+' '
  // console.log(numbers[flag])
}
console.log(result) //=> '1 2 4 7 '

let values = []
values[0] = 1
values['number'] = 10
values[1] = 20

for(let index in values){
  console.log(`${index} => ${values[index]}`)
}
//=>
// '0 => 1'
// '1 => 20'
// 'number => 10'

for(let value of values){
  console.log(value)
}
//=>
// '1'
// '20'
// '10'
