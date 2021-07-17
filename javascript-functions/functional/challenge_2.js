// desafio 1
function somar(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}
const teste = somar(1)(2)(58)
console.log(teste);
// console.log(teste(25));


// desafio 2
function calcular (x) {
    return function(y) {
        return function(fn) {
            return fn(x, y)
        }
    }
}

function subtrair(c, d) {
    return c - d
}

function multiplicar(c, d) {
    return c * d
}

const resultado1 = calcular(10)(8)(subtrair)
const resultado2 = calcular(10)(8)(multiplicar)
console.log(resultado1);
console.log(resultado2);


// desafio 3
function calc(u) {
    return function(i) {
        return function(o) {
            return function(fn) {
                return fn(u, i, o)
            }
        }
    }
}

function media(f, g, h) {
    return (f * g) / h
}
const result = calc(10)(5)(2)(media)
console.log(result);

