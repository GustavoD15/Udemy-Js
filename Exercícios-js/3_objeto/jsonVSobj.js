/*
* JSON é o formato de dados mais usado para 
* interoperabilidade entre sistemas.
* É um formato textual
* Qualquer texto e atibuto colocado em JSON
* deve ser delimitado por aspas duplas
*/
const obj = { a: 1, b: 2, c: 3, soma(){ return a+ b + c}}
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{ "a": 1.5, "b": true, "c": 3}'))