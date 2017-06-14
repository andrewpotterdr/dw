let numRows = 3
let numCols = 4
let result = ''

for(let row = 1; row <= numRows; row++){
  for(let col = 1; col <= numCols; col++){
    result += `Item ${row}.${col} `
    if(col == numCols) result += '\n'
  }
}

console.log(result)

// Item 1.1 Item 1.2 Item 1.3 Item 1.4
// Item 2.1 Item 2.2 Item 2.3 Item 2.4
// Item 3.1 Item 3.2 Item 3.3 Item 3.4

result = '<table>\n'

for(let row = 1; row <= numRows; row++){
  result += '  <tr>\n'
  for(let col = 1; col <= numCols; col++){
    result += `    <td>Item ${row}.${col}</td>\n`
  }
  result += '  </tr>\n'
}
result += '</table>'

console.log(result)


// <table>
//   <tr>
//     <td>Item 1.1</td>
//     <td>Item 1.2</td>
//     <td>Item 1.3</td>
//     <td>Item 1.4</td>
//   </tr>
//   <tr>
//     <td>Item 2.1</td>
//     <td>Item 2.2</td>
//     <td>Item 2.3</td>
//     <td>Item 2.4</td>
//   </tr>
//   <tr>
//     <td>Item 3.1</td>
//     <td>Item 3.2</td>
//     <td>Item 3.3</td>
//     <td>Item 3.4</td>
//   </tr>
// </table>

result = '<table>\n'

for(let cell = 1; cell <= numCols*numRows; cell++){
  let row = Math.ceil(cell/numCols)
  let col = cell%numCols
  if(col == 0) col = numCols
  if(col == 1) result += '  <tr>\n'
  result += `    <td>Item ${row}.${col}</td>\n`
  if(col == numCols)result += '  </tr>\n'
}
result += '</table>'

console.log(result)