// pessoa -> 123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 465 -> {...}
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa) // Immpede qualquer mudança no objeto

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua abc'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)