# Exercícios

## Body mass index (BMI)
Category | BMI
-|-
Underweight | <18.5
Normal weight | 18.5–24.9
Overweight | 25–29.9
Obesity | BMI of 30 or greater

```
// BMI = weight/height²
let height = 1.5
let weight = 60
```

## IRRF 2017

Base de cálculo mensal em R$ | Alíquota % | Parcela a deduzir do imposto em R$
-----------------------------|------------|-----------------------------------
Até 1.903,98 | – | –
De 1.903,99 até 2.826,65 | 7,5| 142,80
De 2.826,66 até 3.751,05 | 15,0 | 354,80
De 3.751,06 até 4.664,68 | 22,5 | 636,13
Acima de 4.664,68	| 27,5 | 869,36

https://www.tabeladoirrf.com.br/tabela-irrf-2017.html

```
let salary = 3500.5
```

## Numbers
```
00 01 02 03 04 05 06 07 08 09
10 11 12 13 14 15 16 17 18 19
20 21 22 23 24 25 26 27 28 29
30 31 32 33 34 35 36 37 38 39
40 41 42 43 44 45 46 47 48 49
50 51 52 53 54 55 56 57 58 59
60 61 62 63 64 65 66 67 68 69
70 71 72 73 74 75 76 77 78 79
80 81 82 83 84 85 86 87 88 89
90 91 92 93 94 95 96 97 98 99
```

```
99 98 97 96 95 94 93 92 91 90
89 88 87 86 85 84 83 82 81 80
79 78 77 76 75 74 73 72 71 70
69 68 67 66 65 64 63 62 61 60
59 58 57 56 55 54 53 52 51 50
49 48 47 46 45 44 43 42 41 40
39 38 37 36 35 34 33 32 31 30
29 28 27 26 25 24 23 22 21 20
19 18 17 16 15 14 13 12 11 10
09 08 07 06 05 04 03 02 01 00
```

```
// h = 1/1 + 1/2 + ... + 1/n

let n = 10
```

## calendar
```
console.log(calendar('SEG', 31))
//=>
// DOM SEG TER QUA QUI SEX SAB
//      01  02  03  04  05  06
//  07  08  09  10  11  12  13
//  14  15  16  17  18  19  20
//  21  22  23  24  25  26  27
//  28  29  30  31
```

## Area of Circle
```
// A = πr²
let radius = 10
console.log(areaOfCircle(radius)) //=> 314.16

radius = 20
console.log(areaOfCircle(radius)) //=> 1256.64
```

## Factorial
```
console.log(factorial(4)) //=> 24
console.log(factorial(6)) //=> 720
```

## Fibonacci
```
console.log(fibonacci(4)) //=> 0, 1, 1, 2
console.log(fibonacci(6)) //=> 0, 1, 1, 2, 3, 5
```

## Prime numbers
```
console.log(prime(4))     //=> 2, 3, 5, 7
console.log(prime(6))     //=> 2, 3, 5, 7, 11, 13
console.log(prime(2, 10)) //=> 2, 3, 5, 7
console.log(prime(2, 20)) //=> 2, 3, 5, 7, 11, 13, 17, 19
```

## Hamming
```
function hamming(){
  // TODO
}

let dna1 = 'GGACG'
let dna2 = 'GGTCG'
              ˆ
console.log(hamming(dna1, dna2)) //=> 1

dna1 = 'GGACGGATTCTG
dna2 = 'AGGACGGATTCT
        ˆ ˆˆˆ ˆˆ ˆˆˆ
console.log(hamming(dna1, dna2)) //=> 9
```

## CEP
https://viacep.com.br/ws/01001000/json/

```
cep: 01001-000,
logradouro: Praça da Sé,
complemento: lado ímpar,
bairro: Sé,
localidade: São Paulo,
uf: SP,
unidade: ,
ibge: 3550308,
gia: 1004
```

## Calc
```
// operator: '+', '-', '*', '/'
function calc(operand1, operand2, operator){
  // TODO
}

console.log(calc(1, 1, '+')) //=> 2
console.log(calc(1, 1, '*')) //=> 1
```

## Min
```
function min(array){
  // TODO
}

let array = [1, 4, 2, 6, 10, 3]
console.log(min(array)) //=> 1
```

## Max
```
function max(array){
  // TODO
}

let array = [1, 4, 2, 6, 10, 3]
console.log(max(array)) //=> 10
```

## Range
```
// TODO function range

console.log(range(10))
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(range(1, 11))
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(range(0, 30, 5))
//=> [0, 5, 10, 15, 20, 25]
```

## Zip
```
zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false])
//=> [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]

zip(['moe', 'larry'], [30, 40])
//=> [["moe", 30], ["larry", 40]]
```

## Uniq
```
uniq([1, 2, 1, 4, 1, 3])
//=> [1, 2, 4, 3]


uniq([1, 2, 1, 3, 3])
//=> [1, 2, 3]
```

## Random
```
Math.random()
//=> 0.058464593778000395

random(0, 100)
//=> 42

let people = ['Fulano', 'Beltrano' , 'Sicrano']
console.log(people[random(0, people.length - 1)])
```

## Citation
```
let name = 'Luiz Carlos Rodrigues Chaves'

console.log(citationName(name))
//=> 'CHAVES; Luiz Carlos Rodribues'

console.log(citationCompactName(name))
//=> 'CHAVES; L. C. R.'
```

## Triangle Checker
```
console.log(triangleChecker(2, 2, 2))    //=> equilateral
console.log(triangleChecker(10, 10, 10)) //=> equilateral

console.log(triangleChecker(3, 4, 4))    //=> isosceles
console.log(triangleChecker(4, 3, 4))    //=> isosceles
console.log(triangleChecker(4, 4, 3))    //=> isosceles
console.log(triangleChecker(10, 10, 2))  //=> isosceles

console.log(triangleChecker(3, 4, 5))    //=> scalene
console.log(triangleChecker(10, 11, 12)) //=> scalene
console.log(triangleChecker(5, 4, 2))    //=> scalene

console.log(triangleChecker(0, 0, 0))    //=> none
console.log(triangleChecker(3, 4, -5))   //=> none
console.log(triangleChecker(1, 1, 3))    //=> none
console.log(triangleChecker(2, 4, 2))    //=> none
```

## Validing CPF

**Validação do primeiro dígito**

Primeiramente multiplica-se os 9 primeiros dígitos pela sequência decrescente de números de 10 à 2 e soma os resultados. Então cosiderando o **CPF** 123.456.789-09 temos:

| Nove primeiros dígitos antes do traço |	1	| 2	| 3	| 4	| 5	| 6	| 7	| 8	| 9 |
| - | - | - | - | - | - | - | - | - | - |
| Valor de 10 até 2 para multiplicar	  | 10| 9	| 8	| 7	| 6	| 5	| 4	| 3	| 2 |
| Resultado da multiplicação            | 10 | 18 | 24 | 28 | 30 | 30 | 28 | 24 | 18 |

**Total: 210**

O próximo passo da verificação basta multiplicarmos o valor `Total` por 10 e dividirmos por 11:

Resto = (210 * 10) % 11 = 10

Se o `Resto` for igual ao primeiro dígito verificador, a primeira parte da validação está correta. Contudo, se o `Resto` for igual a 10 ou 11, então ele será 0.

**Validação do segundo dígito**

A validação do segundo dígito é semelhante à primeira, porém vamos multiplicar esses 10 números pela sequencia decrescente de 11 a 2:

| Dez primeiros dígitos	| 1	| 2	| 3	| 4	| 5	| 6	| 7	| 8	| 9	| 0 |
| - | - | - | - | - | - | - | - | - | - | - |
| Valor de 11 até 2 para multiplicar	| 11	| 10	| 9	| 8	| 7	| 6	| 5	| 4	| 3	| 2 |
| Resultado da multiplicação	| 11	| 20	| 27	| 32	| 35	| 36	| 35	| 32	| 27	| 0 |

**Total: 255**

O próximo passo da verificação basta multiplicarmos o valor `Total` por 10 e dividirmos por 11:

Resto = (255 * 10) % 11 = 9

Se o `Resto` for igual ao segundo dígito verificador, a segunda parte da validação está correta. Contudo, se o `Resto` for igual a 10 ou 11, então ele será 0.

**Obs:** http://www.dicasdeprogramacao.com.br/algoritmo-para-validar-cpf/

```
validateCPF('12345678909') //=> true
```

## Table Convert .md to .html
```
const table =
  `| Header One     | Header Two     |
   | :------------- | :------------- |
   | Item One       | Item Two       |`

console.log(tablemd2html(table))
//=>
// <table>
//   <thead>
//     <tr>
//       <th>Header One</th>
//       <th>Header Two</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>Item One</td>
//       <td>Item Two</td>
//     </tr>
//   </tbody>
// </table>

```

## Matrices

```
// Adding a Matrix by Another Matrix
let a = [[3, 8], [4, 6]]
let b = [[4, 0], [1, -9]]
console.log(addingMatrix(a, b)) //=> [[7, 8], [5, -3]]

// Multiplying a Matrix by Another Matrix
let a = [[1, 2, 3], [4, 5, 6]]
let b = [[7, 8], [9, 10], [11, 12]]
console.log(multiplyingMatrix(a, b)) //=> [[58, 64], [139, 154]]
```

## Diff Timestamp (ms)
```
let last = 1483239600000 // (new Date(2017, 0, 1)).getTime()
let now  = 1496762425846 // Date.now()

diffMonth(last, now) //=> 5
```

## IP
```
ip2decimal('192.168.0.1') //=> 3232235521
ip2decimal('192.168.0.2') //=> 3232235522

decimal2ip(3232235521) //=> 192.168.0.1
decimal2ip(3232235522) //=> 192.168.0.2
```

## Min withdraw
```
withdraw(1280) //=> [[100, 12], [50, 1], [20, 1], [10, 1]]
```

## Exam
```
studend1 = {q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b'}
studend2 = {q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}
weight =   {q1:  2 , q2:  2 , q3:  2 , q4:  2 , q5:  2 }
answer =   {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}

weightedAvg(studend1, weight, answer) //=> 4
weightedAvg(studend2, weight, answer) //=> 8
```


## Cipher
```
console.log(rot('abc', 2)) //=> cde
console.log(rot('xyz', 2)) //=> zab
```

## Figure Text
```
console.log(triangleText(1))
//=>
// #

console.log(triangleText(2))
//=>
// #
// ##

console.log(triangleText(3))
//=>
// #
// ##
// ###

console.log(halfDiamondText(1))
//=>
// #

console.log(halfDiamondText(2))
//=>
// #
// ##
// #

console.log(halfDiamondText(3))
//=>
// #
// ##
// ###
// ##
// #

console.log(diamondText(1))
//=>
// #

console.log(diamondText(2))
//=>
//  #
// ###
//  #

console.log(diamondText(3))
//=>
//   #
//  ###
// #####
//  ###
//   #

console.log(boardText(1))
//=>
// #

console.log(boardText(2))
//=>
// #
//  #

console.log(boardText(3))
//=>
// # #
//  #
// # #

console.log(boardText(4))
//=>
// # #
//  # #
// # #
//  # #
```

## Brazilian Championship A Series 2016

Team | MP | W | D | L | GF | GA | GD | PTS
---- | -- | - | - | - | -- | -- | -- | ---
Palmeiras | 38 | 24 | 8 | 6 | 62 | 32 | 30 | 80
Santos | 38 | 22 | 5 | 11 | 59 | 35 | 24 | 71
Flamengo | 38 | 20 | 11 | 7 | 52 | 35 | 17 | 71
Atlético Mineiro | 38 | 17 | 11 | 10 | 61 | 53 | 8 | 62
Botafogo | 38 | 17 | 8 | 13 | 43 | 39 | 4 | 59
Atlético-PR | 38 | 17 | 6 | 15 | 38 | 32 | 6 | 57
Corinthians | 38 | 15 | 10 | 13 | 48 | 42 | 6 | 55
Ponte Preta | 38 | 15 | 8 | 15 | 48 | 52 | -4 | 53
Grêmio | 38 | 14 | 11 | 13 | 41 | 44 | -3 | 53
São Paulo | 38 | 14 | 10 | 14 | 44 | 36 | 8 | 52
Chapecoense | 38 | 13 | 13 | 12 | 49 | 56 | -7 | 52
Cruzeiro | 38 | 14 | 9 | 15 | 48 | 49 | -1 | 51
Fluminense | 38 | 13 | 11 | 14 | 45 | 45 | 0 | 50
Sport Recife | 38 | 13 | 8 | 17 | 49 | 55 | -6 | 47
Coritiba | 38 | 11 | 13 | 14 | 41 | 42 | -1 | 46
Vitória | 38 | 12 | 9 | 17 | 51 | 53 | -2 | 45
Internacional | 38 | 11 | 10 | 17 | 35 | 41 | -6 | 43
Figueirense | 38 | 8 | 13 | 17 | 30 | 50 | -20 | 37
Santa Cruz | 38 | 8 | 7 | 23 | 45 | 69 | -24 | 31
América-MG | 38 | 7 | 7 | 24 | 23 | 58 | -35 | 28

Legend: (MP) Matches played, (W) Wins, (D) Draws, (L) Losses, (GF) Goals for, (GA) Goals against, (GD) Goals difference, (PTS) Team points, (RC) Red Cards, (YC) Yellow Cards

Teams are ranked by PTS, W, GD, and GF. If points are equal between two or more clubs, the rules are W, GD, GF, head-to-head record, RC, YC.

```
cont standings = // TODO
console.log(firstTeam(standings))
//=> Palmeiras

console.log(showStading(standings))
//=>
Palmeiras        | 38 | 24 |  8 |  6 | 62 | 32 |  30 | 80
Santos           | 38 | 22 |  5 | 11 | 59 | 35 |  24 | 71
Flamengo         | 38 | 20 | 11 |  7 | 52 | 35 |  17 | 71
Atlético Mineiro | 38 | 17 | 11 | 10 | 61 | 53 |   8 | 62
Botafogo         | 38 | 17 |  8 | 13 | 43 | 39 |   4 | 59
Atlético-PR      | 38 | 17 |  6 | 15 | 38 | 32 |   6 | 57
Corinthians      | 38 | 15 | 10 | 13 | 48 | 42 |   6 | 55
Ponte Preta      | 38 | 15 |  8 | 15 | 48 | 52 |  -4 | 53
Grêmio           | 38 | 14 | 11 | 13 | 41 | 44 |  -3 | 53
São Paulo        | 38 | 14 | 10 | 14 | 44 | 36 |   8 | 52
Chapecoense      | 38 | 13 | 13 | 12 | 49 | 56 |  -7 | 52
Cruzeiro         | 38 | 14 |  9 | 15 | 48 | 49 |  -1 | 51
Fluminense       | 38 | 13 | 11 | 14 | 45 | 45 |   0 | 50
Sport Recife     | 38 | 13 |  8 | 17 | 49 | 55 |  -6 | 47
Coritiba         | 38 | 11 | 13 | 14 | 41 | 42 |  -1 | 46
Vitória          | 38 | 12 |  9 | 17 | 51 | 53 |  -2 | 45
Internacional    | 38 | 11 | 10 | 17 | 35 | 41 |  -6 | 43
Figueirense      | 38 |  8 | 13 | 17 | 30 | 50 | -20 | 37
Santa Cruz       | 38 |  8 |  7 | 23 | 45 | 69 | -24 | 31
América-MG       | 38 |  7 |  7 | 24 | 23 | 58 | -35 | 28
```

## Sum & Product
```
let array = [1, 2, 3]
console.log(sumArray(array)) //=> 6

array = [2, 2, 2]
console.log(sumArray(array)) //=> 6

array = [1, 2, 3, 4, 5, 6]
console.log(sumArray(array)) //=> 21

array = [1, 2, 3]
console.log(productArray(array)) //=> 6

array = [2, 2, 2]
console.log(productArray(array)) //=> 8

array = [1, 2, 3, 4, 5, 6]
console.log(productArray(array)) //=> 720
```

## Sum odds
```
let array = [1, 2, 3]
console.log(sumArrayOdd(array)) //=> 3

array = [2, 2, 2]
console.log(sumArrayOdd(array)) //=> 0

array = [1, 2, 3, 4, 5, 6]
console.log(sumArrayOdd(array)) //=> 15
```

## String to Number
```
let char = 'A'
let hexa = char.charCodeAt().toString(16)
console.log(hexa) //=> 41

char = '0x41'
hexa = String.fromCharCode(parseInt(char, 16))
console.log(hexa) //=> 'A'

console.log(str2hex('AB'))       //=> '41 42'
console.log(str2hex('ABC'))      //=> '41 42 43'
console.log(hex2str('41 42'))    //=> 'AB'
console.log(hex2str('41 42 43')) //=> 'ABC'

console.log(str2bin('AB'))                         //=> '01000001 01000010'
console.log(str2bin('ABC'))                        //=> '01000001 01000010 01000011'
console.log(bin2str('01000001 01000010'))          //=> 'AB'
console.log(bin2str('01000001 01000010 01000011')) //=> 'ABC'

console.log(str2dec('AB'))       //=> '65 66'
console.log(str2dec('ABC'))      //=> '65 66 67'
console.log(dec2str('65 66'))    //=> 'AB'
console.log(dec2str('65 66 67')) //=> 'ABC'
```

## Average
```
students = [
  {"student": "Fulano", "grade": 10},
  {"student": "Sicrano", "grade": 5},
  {"student": "Beltrano", "grade": 7},
]

console.log(calcAverage(students)) //=> 7.3
console.log(calcMin(students))     //=>
console.log(calcMin(students, 5))  //=>
console.log(calcMax(students))     //=>
```

## Apply bold
```
let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'

console.log(applyBold(text, 'ipsum'))
//=> Lorem <b>ipsum</b> dolor sit amet, consectetur adipisicing elit
```

## Order
```
pencil = new Product(1, 'Lápis', 1.5)
pen  = new Product(2, 'Caneta', 3)
notebook = new Product(3, 'Caderno', 20)

order = new Order()
order.addProduct(pencil)
order.addProduct(pencil)
order.addProduct(pen)
order.addProduct(notebook)
console.log(order.total()) //=> 26

pencil = new Product(1, 'Lápis', 1.5, ['office'])
pen  = new Product(2, 'Caneta', 3, ['office'])
notebook = new Product(3, 'Caderno', 20, ['office'])
flashDrive = new Product(4, 'USB Flash Drive', 40, ['eletronics', 'office'])
headPhone = new Product(5, 'Headphone', 40, ['eletronics'])

order = new Order()
order.addProduct(pencil)
order.addProduct(pencil)
order.addProduct(pen)
order.addProduct(notebook)
order.addProduct(flashDrive)
order.addProduct(flashDrive)
order.addProduct(headPhone)
console.log(order.toString())
//=>
// 1 Lápis      002 UN   1.50   3.00
// 2 Caneta     001 UN   3.00   3.00
// 3 Caderno    001 UN  20.00  20.00
// 4 USB Flash  002 UN  40.00  80.00
// 5 Headphone  001 UN  40.00  40.00
console.log(order.total()) //=> 146
console.log(order.total('eletronics')) //=> 120
console.log(order.total('office')) //=> 106
```

## Sugestões

* [Exercism](http://exercism.io/languages/ecmascript/exercises)
* [Javscript Koan](https://github.com/mrdavidlaing/javascript-koans)
* [URI Online Judge](https://www.urionlinejudge.com.br/judge/en/categories)
