const escola = "Cod3r"

console.log(escola.charAt(4)) // Caracter em posição
console.log(escola.charCodeAt(3)) // ASCII do caracter da posição
console.log(escola.indexOf('3')) // Posição do caracter específico

console.log(escola.substring(1)) // Reproduz a string a partir de uma posição
console.log(escola.substring(0, 3)) // Reproduz a string dentre a posição

console.log('Escola '.concat(escola).concat("!")) // Concatenar strings
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'z')) // Substitui

console.log('Ana, Maria, Pedro'.split(',')) // Gera um array a partir de uma divisão

// Template string

const nome  = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `Olá ${nome}"`
console.log(concatenacao, template)
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)