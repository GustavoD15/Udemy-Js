// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2) // 2 + undefined = NaN
imprimirSoma(2, 3, 10, 11, 12, 13) // Seleciona o (a, b) como os dois primeiros
imprimirSoma() // NaN

// Função com retonro
function soma(a, b = 1){ 
    return a+ b;
}

imprimirSoma(2, 3) // b pré-definido ele só recebe o valor de a.
imprimirSoma() // undefined + 1 = NaN