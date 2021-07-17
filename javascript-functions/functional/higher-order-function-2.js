// Retornar uma funcão a partir de outra função
// técnica curring = passa parâmetros de forma parcial para funções. Objetivo = reuso

function calcImpoost(tax) {
    return function multiply(price) {
        return price * (1 + tax)
    }
}

const impost = calcImpoost(2)

console.log(impost(10));