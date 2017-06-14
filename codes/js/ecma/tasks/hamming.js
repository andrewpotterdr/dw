function hamming(dna1, dna2){
  let diff = 0
  for(let char = 0; char < dna1.length; char++){
    if(dna1[char] != dna2[char]) diff++
  }
  return diff
}

// Example 1
console.log(hamming('GGACG', 'GGTCG')) // 1

// Example 2
console.log(hamming('GGACGGATTCTG', 'AGGACGGATTCT')) // 9