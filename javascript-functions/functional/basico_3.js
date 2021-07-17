// arrow function

const janaina = (a, b) => {
    if (a < 10) {
        return a + b
    } else {
        return a - b
    }
}

console.log(janaina(8, 2));
console.log(janaina(200, 3));

// desafio: transformar essa função com outras funções como parâmetro em arrow funcion
        // function calcular (x) {
        //     return function(y) {
        //         return function(fn) {
        //             return fn(x, y)
        //         }
        //     }
        // }

        // function multiplicar(c, d) {
        //     return c * d
        // }

        // const resultado1 = calcular(10)(8)(subtrair)
        // const resultado2 = calcular(10)(8)(multiplicar)
        // console.log(resultado1);
        // console.log(resultado2);





        const calculate = x => y => fn => fn(x,y)
        const multiply = (x, y) => x * y
        console.log(calculate(10)(8)(multiply));
