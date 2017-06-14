let numeroDias = 31
let diaSemanaInicial = 1 // DOM = 0

let result = ' DOM SEG TER QUA QUI SEX SAB\n'

for(let times=0; times <= diaSemanaInicial; times++){
  result += '  '
}

for(let day = 1; day <= numeroDias; day++){    
    if(day < 10) 
      result += ` 0${day} `
    else
      result += ` ${day} ` 
    if((day+diaSemanaInicial) % 7 == 0) 
      result += '\n'
}

console.log(result)

//  DOM SEG TER QUA QUI SEX SAB
//      01  02  03  04  05  06 
//  07  08  09  10  11  12  13 
//  14  15  16  17  18  19  20 
//  21  22  23  24  25  26  27 
//  28  29  30  31
