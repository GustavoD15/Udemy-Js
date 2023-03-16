// Entendendo escopo

// Usando var
for(var i = 0; i < 10; i++){
    console.log(i)
}
console.log('i =', i)


// Usando let
for(let z = 0; z < 10; z++){
    console.log(z)
}
/* console.log('z = ', z)
* Let declara z apenas dentro
* do bloco for
*/


const funcs = []

for (var a = 0; a < 10; a++){
    funcs.push(function(){
        console.log(a)
    })
}
funcs[2]()
funcs[8]()
// Falta de escopo do var não grava o valor em seu local definido


const funcss = []

for (let a = 0; a < 10; a++){
    funcss.push(function(){
        console.log(a)
    })
}
funcss[2]()
funcss[8]()