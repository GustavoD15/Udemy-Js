// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())


// Factory 2
function Criarproduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(Criarproduto('Notebook', 2199.49))
console.log(Criarproduto('ipad', 1199.49))