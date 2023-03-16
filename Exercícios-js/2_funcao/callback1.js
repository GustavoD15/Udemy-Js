const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

// callback 2

const notas = [7.7, 6.5,  5.2, 8.9, 3.6, 7.1, 9.0]
// Sem callback
const notasbaixas = []
for (let i in notas){
    if (notas[i] < 7){
        notasbaixas.push(notas[i])
    }
}
console.log(notasbaixas)


//Com callback
const notasbaixas2 = notas.filter(function (notas){
    return notas < 7
})
console.log(notasbaixas2)

const notasbaixas3 = notas.filter(nota => nota < 7)
console.log(notasbaixas3)
