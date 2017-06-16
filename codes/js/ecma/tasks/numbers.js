let result = ''

for (let flag = 0; flag < 100;flag++) {
  if(flag % 10 == 0)
    result += '\n'
    
  // let number = (flag < 10)? '0'+flag : flag
  // result += `${number} `
  result += `${flag.toString().padStart(2, '0')} `
}

console.log(result)
