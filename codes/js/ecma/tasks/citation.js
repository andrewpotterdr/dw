const citationName = function(name){
  let result = ''
  let words = name.split(' ')
  let lastWord = words.pop()
  lastWord = lastWord.toUpperCase()
  words = words.join(' ')
  result = `${lastWord}; ${words}`
  return result
}

let name = 'Luiz Carlos Rodrigues Chaves'
console.log(citationName(name))
//=> 'CHAVES; Luiz Carlos Rodribues'

const citationCompactName = function(name){
  let result = ''
  let words = name.split(' ')
  let lastWord = words.pop()
  lastWord = lastWord.toUpperCase()
  // for(let index in words){
  //   words[index] = `${words[index][0].toUpperCase()}.`
  // }
  words = words.map(word => `${word[0].toUpperCase()}.`)
  words = words.join(' ')
  result = `${lastWord}; ${words}`
  return result
}

name = 'Luiz Carlos Rodrigues Chaves'
console.log(citationCompactName(name))
//=> 'CHAVES; L. C. R.'
