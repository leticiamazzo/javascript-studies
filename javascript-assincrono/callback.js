// callback
// operação assíncrona
// pede para executar uma função, quando determinada coisa acontecer. Enquanto não tem uma resposta, continua lendo o código. Quando o esperado acontecer, chama de volta a função

const fs = require('fs')

console.log(1);

function justSum(n1, n2, callback) {
    let s = n1 + n2
    callback(s)
}

justSum(10, 20, function (result) {
    console.log(result);
})
 
console.log(2);
console.log(3);


// diferença entre callback e promise
// callback = fala que vai chamar depois
// promise = retorna de imedito uma promessa que no futuro trará valor
// async / await = açúcar sintático em cima da promise. é uma promise. trata erro com try catch
