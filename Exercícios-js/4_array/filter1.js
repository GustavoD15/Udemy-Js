// Percorre o array filtrando baseado na função dada
// retorna o array resultante
const prduto = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad pro', preco: 4199, fragil: true},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plástico', preco: 18.99, fragil: false}

]

console.log(prduto.filter(function(p) {
    return p.preco > 2000
}))

const caro = produto => produto.preco >= 500
const fragil = produto => prduto.fragil
