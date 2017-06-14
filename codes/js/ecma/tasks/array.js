function min(array) {
  let minValue = array[0] // Number.POSITIVE_INFINITY
  for (let index = 0; index < array.length; index++) {
    if (minValue > array[index]) minValue = array[index]
  }
  return minValue
}

function max(array) {
  let maxValue = array[0] // Number.NEGATIVE_INFINITY
  for (let value of array) {
    if (value > maxValue) maxValue = value
  }
  return maxValue
}

function range(begin, end, step) {
  let result = []
  let beginValue = (end == undefined) ? 0 : begin
  let endValue = (end == undefined) ? begin : end
  let stepValue = (step == undefined) ? 1 : step
  for (let flag = beginValue; flag < endValue; flag += stepValue)
    result.push(flag)
  return result
}

function zip(...arrays) {
  let result = []
  for (let index = 0; index < arrays.length; index++) {
    let values = []
    for (let array = 0; array < arrays.length; array++)
      values.push(arrays[array][index])
    result.push(values)
  }
  return result
}

function includes(array, value) {
  for (let valueArray of array) {
    if (valueArray == value)
      return true
  }
  return false
}

function uniq(array) {
  result = []
  for (let value of array) {
    if (!includes(result, value))
      result.push(value)
  }
  return result
}

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let array = [1, 4, 2, 6, 10, 3]
console.log(min(array)) //=> 1

array = [100, 45, 2, 65, 10, 33]
console.log(min(array)) //=> 2

array = [1, 4, 2, 6, 10, 3]
console.log(max(array)) //=> 10

console.log(range(10))
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(range(1, 11))
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(range(0, 30, 5))
//=> [0, 5, 10, 15, 20, 25]

console.log(zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]))
//=> [['moe', 30, true], ['larry', 40, false], ['curly', 50, false]]

console.log(zip(['moe', 'larry'], [30, 40]))
//=> [['moe', 30], ['larry', 40]]

console.log(uniq([1, 2, 1, 4, 1, 3]))
//=> [1, 2, 4, 3]

console.log(uniq([1, 2, 1, 3, 3]))
//=> [1, 2, 3]

console.log(random(0, 100))
//=> 42

let people = ['Fulano', 'Beltrano', 'Sicrano']
console.log(people[random(0, people.length - 1)])
//=> Beltrano
