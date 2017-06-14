let result = ''
for(let flag = 0; flag < 100; flag++){
    result += (flag < 10)? '0' + flag + ' ' : flag + ' '
    if((flag + 1) % 10 == 0)
      result += '\n'
}
console.log(result)

let result = ''
for(let flag = 99; flag > -1; flag--){
    result += (flag < 10)? '0' + flag + ' ' : flag + ' '
    if((flag + 1) % 10 == 1)
      result += '\n'
}
console.log(result)
