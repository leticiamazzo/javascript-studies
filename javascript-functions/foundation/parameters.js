// Parâmetros
// Testando invocar com mais ou menos parâmetros

function logParams(a, b, c) {
    console.log(a, b, c);
}

function defaultParams(a, b, c = 13) {
    console.log(a, b, c);
}

logParams(1, 2, 3)
logParams(1, 2, 3, 4, 5) // descarta os valores a mais
logParams(1) // considera undefined os valores não informados


defaultParams(1)
defaultParams( )
defaultParams(2, 3, 5) //se passa um novo valor altera o valor padrão atribuído a c (c = 13)



// quantidade flexível de parâmetros
// function logNums (nums) {
//     for(let n of nums) {
//         console.log(n);
//     }
// }

// logNums([1, 2, 3, 4, 5]);

// operador spread/rest ... significa que a função vai receber um número variado de parâmetros e todos os parâmetros são armazenados dentro de uma função
// O método Array.isArray() retorna true se um objeto é uma array, e false se não é.
function logNums (...nums) {
    console.log(Array.isArray(nums))

    for(let n of nums) {
        console.log(n);
    }
}

logNums(1, 2, 3, 4, 5, 6);
console.log('pula linha');

// operador spread/rest
// permite passar parâmetros variáveis e trata dentro da função como um array
function sumAll(...nums) {
    let total = 0
    for (const n of nums) {
        total += n
    }
    return total      
}

console.log(sumAll(6, 2, 1));
