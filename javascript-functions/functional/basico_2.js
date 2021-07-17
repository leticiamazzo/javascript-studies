// passar função como param para outra função
// serve para uma requisição assíncrona, por exemplo, onde a segunda função é executada depois de algum evento
// function é um object do js, por isso pode ser passada como parâmetro e tem a mesma sintaxe de uma variável

        function bomDia() {
            console.log("bom dia");
        }

        const boaTarde = function () {
            console.log("boa tarde");
        }

        function executar(fn) {
            if (typeof fn === 'function') {
                fn()
            }
        }

        executar(bomDia)
        executar(boaTarde)
        executar(9655566589855) //não retorna nada no console, porque number não é uma função


        function cumprimentar(fn) {
            fn()
        }

        function hello() {
            console.log(`olar`);
        }

        cumprimentar(hello)



        
// retornar uma função a partir de outra função
        function calcularTabuada(c) {
            return function(d) {
                return c * d
            }
        }
        const conclusao = calcularTabuada(10)(5)
        console.log(conclusao);




        function calcular(a) {
            return function(b) {
                return a * b;
            }
        }
        const resultado = calcular(1)(13);
        console.log(resultado);




        function potencia1(base1, expoente1) {
            return Math.pow(base1, expoente1)
        }

        const pow1 = potencia1(3, 2)
        console.log(pow1);




        function potencia2(base2) {
            return function(expoente2) {
                return Math.pow(base2, expoente2)
            }
        }
        const pow2 = potencia2(2)
        console.log(pow2(3));

        console.log(potencia2(3)(2));

        