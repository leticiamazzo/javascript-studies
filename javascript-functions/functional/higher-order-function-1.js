// Função que pode operar outras funções. Passa 1 função por argumento para outra ou pode retornar por 1 função a partir de outra
function run(fn) {
    return fn()
}

function showMessage() {
    console.log("hello");
}

run(showMessage)

run(function() {
    console.log("hi");
})

const result = run(Math.random)
console.log(result);
