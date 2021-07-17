// Callback = passa funcão como parâmetro para outra função de depois ela vai ser chamada / invocada de volta
// Exemplo de uso: leitura de arquivo, erro ou faz requisição para um servidor, há uma chamada http e, quando vier a resposta, uma função callback é chamada
// conceito de programação reativa (quando um evento acontece, chama a funçnao de volta)

// function exec(fn, a, b) {
//     return fn(a,b)
// }

const exec = (fn, a, b) => fn(a, b)

const somarNoTerminal = (c, d) => console.log(c + d)
const subtrairNoTerminal = (e, f) => console.log(e - f)




exec(somarNoTerminal, 50, 30)
exec(subtrairNoTerminal, 50, 30)