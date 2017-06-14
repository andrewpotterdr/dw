let cep = {
  cep: "01001-000",
  logradouro: "Praça da Sé",
  complemento: "lado ímpar",
  bairro: "Sé",
  localidade: "São Paulo",
  uf: "SP",
  unidade: "",
  ibge: "3550308",
  gia: "1004"
}

// Object.keys(cep)
for(let key of Object.keys(cep)){
  console.log(`${key}: ${cep[key]}`)
}

// for..in
for(let key in cep){
  console.log(`${key}: ${cep[key]}`)
}

// Object.values(cep) / values only
