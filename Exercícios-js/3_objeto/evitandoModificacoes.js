/*
* Object.preventExtensions
*   impede a criação de novos atributos
*   mas permite exclusão e alteração dos já existentes
*/
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extenível: ', Object.isExtensible(produto))

produto.nome = 'Borrachas'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)


/*
* Object.seal
*   impede a criação e exclusão de novos atributos
*   mas permite alteração dos já existentes
*/
const pessoa = { nome: 'Juliana', idade: 39 }
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.name
pessoa.idade = 29
console.log(pessoa)

// Object.freeze -> trava commpletament os atributos de um objeto