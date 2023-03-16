// Aritmeticos
const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const subtracao = a - b - c - d
const multiplicacao = a * b * c * d
const divisao = a / b / c / d
const modulo = a % 2
console.log(soma, subtracao, multiplicacao, divisao, modulo)

// Relacionais

console.log('01', '1' == 1)
console.log('02', '1' === 1)
console.log('03', '3' != 3)
console.log('04', '3' !== 3)

console.log('05', '3' < 2)
console.log('06', '3' > 2)
console.log('07', '3' <= 2)
console.log('08', '3' >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09', d1 === d2)