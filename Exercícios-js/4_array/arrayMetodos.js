const pilotos = [ 'Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Elimina o últimmo  elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adciona um elemento na última posição
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adciona um elemento na primeira posição
console.log(pilotos)

// Splice pode adcionar e remover elementos
 pilotos.splice(2, 0, 'Bottas', 'Massa')
 console.log(pilotos)

 pilotos.splice(3, 1)
 console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)
 
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)