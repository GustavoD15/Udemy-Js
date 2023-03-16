const soma = function (x, y) {
    return x + y
}

const immprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

immprimirResultado(3, 4)
immprimirResultado(3, 4, soma)
immprimirResultado(3, 4, function (x, y) {
    return x - y
})
immprimirResultado(3, 4, (x, y) => x * y)


const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}
pessoa.falar()