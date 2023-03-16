let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a  // return está implícito
console.log(dobro(3))

let ola = function () { 
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // Possui um parâmetro
console.log(ola())