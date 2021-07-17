// new Promise recebe function que será chamada quando quiser cumprir essa promessa

let p = new Promise(cumprirPromessa => {
    cumprirPromessa({
        x: 3,
        y: 4
    })
})


// para acessar o valor da promise, tem que chamar a promise com o método then. Ele também recebe uma função como parâmetro o valor passado na promise
p.then(valor => console.log(valor.x))

console.log(typeof p);
console.log(typeof Promise);




// Outro exemplo
let t = new Promise(cumprirPromessa2 => {
    cumprirPromessa2(['Ana', 'Renato', 'Roberta'])
})

t
    .then(valor => valor[0])
    .then(valor => console.log(valor))




// Outro exemplo
new Promise(cumprirPromessa => cumprirPromessa("Letícia"))
    .then(valores => valores)
    // .then(valores => valores.length)
    .then(console.log)













// COD3R
// promise = ação que vai ser executada e devolvida no futuro depois que outra ação for concluída. Pode ser resolvida (com sucesso) ou (rejeitada com erro)
// "quando a função x acabar, execute y e me dê o resultado"
// visa representar operações assíncronas
// compõe melhor as chamadas
//  associado a promessa vai ter o valor de alguma coisa. vai receber um dado no futuro, podendo ser uma string, number, boolean, resposta de uma requisição, conteúdo de arquivo...
// Promise = function
// Quando cria nova Promise = objeto
//  Promise gera apenas UM valor. Se quiser devolver mais, tem que ser em formato de objeto

// then - para resolver a promise
// catch - para tratar os erros de uma promise rejeitada
// then e catch retornam promise e isswo permite encadeamento de .then.then.then
// lançar erro - throw - pára a execução do código (equivale a dar return em uma função)
// rejeitar promise - posteriormente código continuará sendo executado

// const p = new Promise((resolve, reject) => {
//     try {
//       resolve(funcaoX())
//     } catch (e) {
//       reject(e)
//     }
//   })
                        
//   // Executando uma promise
//   p
    // .then((parametros) => /* sucesso */)
    // .catch((erro) => /* erro */)
  
  // // Tratando erros e sucessos no then
  // p
  //   .then(resposta => { /* tratar resposta */ }, erro => { /* tratar erro */ })


