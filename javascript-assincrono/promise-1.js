// Roger Melo
// promise = objeto
// representa sucesso ou falha de uma operação assíncrona
// promises são mais vantajosas porque compõe melhor várias chamadas sem ter aninhamento do callback, que dificulta legibilidade

// Javascript que a gente escreve é executado em uma única thread, ou seja, faz uma coisa de cada vez. Ele é executado de forma síncrona (espera uma ação ser FINALIZADA antes de partir para a próxima ação). Esse sincronismo permite que, ao invocar 2 funções em sequência, a segunda só é executada depois da primeira. Exemplo e ilustração::
  // const myFunction1 = () => 'Function 1'
  // const myFunction2 = () => 'Function 2'

  // myFunction1()
  // myFunction2()

// encontra function1
// executa function1

// encontra request
// executa request  -----> espera dados serem encontrados até a resposta ser obtida e operação da request ser concluída. isso bloqueia a execução de todo o resto da fila







// Código assíncrono = pode iniciar um processo agora e terminar depois
// Exemplo de função assíncrona = request a API e setTimeOut(() => {}, milisegundos). Só vai executar a ação depois de especificar os milisegundos

// let randomNumber = 3
// setTimeout(() => {
//   randomNumber += 100
//   console.log(randomNumber);
// }, 4000);

// console.log(randomNumber);







// Mas ao longo desse caminho, há requests que são tarefas separadas e executadas fora da thread. Enquanto elas são processadas, o Javascript segue sendo executado. Ilustração:
// encontra function1
// executa function1

// encontra request
// executa request -----> passa para uma thread separada enquanto os dados são buscados -----> volta para a thread javascript

// encontra function2
// executa function2

// encontra function3
// executa function3

// callback <----------- quando os dados são obtidos a função de callback desse request é adicionada no final da fila de funções
//  OU SEJA, FUNCOES ASSINCRONAS TRAZEM MUITO MAIS EFICIENCIA


  
// PROMISES
// podem envolver e encapsular operações assincronas

// Vantagens:
// 1- ganho de controle e legibilidade no fluxo de lógicas assíncronas
// 2- reduz o acoplamento entre funções de callack
// 3- mais previsibilidade no detalhamento e tratamento de erros

// Como fazer?
// promise recebe função e essa função vai devolver a operação assíncrona que a gente criar
// essa função precisa ter dois parâmetros: resolve, reject (podem ter um outro nome, mas esses são uma convenção universal)
// resolve e reject são 2 funções / métodos que podem ser invocadas dentro da função mencionada acima
// resolve = função a ser invocada quando a operação assíncrona for bem sucedida 
// reject =  função a ser invocada quando a operação assíncrona falhar

// const aPromise = new Promise((resolve, reject) => {
//   const aNumber = 37
//   resolve(aNumber)
// })

// depois de criar a promise, precisa consumi-la em outro lugar do código
// referencia a promise e faz invocação do método then() que também recebe uma função como argumento
// then() recebe a resposta de sucesso da promise
// se um valor foi específicado no argumento da invocação do resolve(), como o aNumber, esse valor vai ser recebido como parâmetro do then() sem nem precisar do return

// aPromise.then((value) => {
//   console.log(value);
// })


// then() pode ser encadeado. Ele sempre retorna uma nova promise, que possui o método then() disponível por padrão, por isso pode ser encadeado quantas vezes forem necessárias
// aPromise
//   .then(value => value)
//   .then((value) => {
//     console.log(value);
//   })


// catch() = método que pode ser encadeado no then() para tratar erros
// Recebe uma função como argumento
// Essa função dentro do catch() vai cuidar do que deve acontecer quando a resposta obtida pela operação não for uma resposta de sucesso.
// catch() vai ser executado em duas situações:
// 1- quando o método reject de dentro da função acima é invocado
// 2- quando o código dentro de algum .then() lança um erro

// Exemplo sintaxe de promise, MAS ESSA OPERERACAO NAO E ASSINCRONA
// const aPromise = new Promise((resolve, reject) => {
//   const aNumber = 37

//   // resolve(aNumber)
//   reject(aNumber)
// })

// aPromise
//   .then(valor => console.log(valor))
//   .catch((rejectValue) => console.log(rejectValue))



// fetch() = método faz uma requisição http e traz os dados da url que especificou como argumento
// quando faz a requisição, ou seja, atribui a url de uma api a const url e coloca ela como parâmetro do método fetch, já vai aparecer na aba network > preview os dados que essa requisição trouxe

// const url = 'https://dog.ceo/api/breeds/image/random'
// fetch(url) 






// Exemplo de promise
// const primeiroElemento = arrayOuString => arrayOuString[0]
// const letraMinuscula = letra => letra.toLowerCase()

// new Promise(function(resolve) {
//   resolve(['Ana', 'Bia', 'Carol', 'Dani'])
// })
  
//   .then(primeiroElemento)
//   .then(primeiroElemento)
//   .then(letraMinuscula)
//   .then(console.log)






// Exemplo compartaivo de como seria função callback
// setTimeout(function () {
//   console.log('Executando callback...');

//   setTimeout(function () {
//     console.log('Executando callback...');

//     setTimeout(function () {
//       console.log('Executando callback...');
//     }, 3000)
//   }, 3000)
// }, 3000)


// Exemplo compartaivo de como seria função promise
function esperarPor(tempo = 2000) {
  // abaixo está a função que vai resolver essa promessa. depois de chamar o resolve(), o then vai ser chamado
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('Executando promise...')
      resolve()
    }, tempo)
  })
}

// para acessar o valor resultante em resolve(), chama o .then()
esperarPor(5000)
  .then(() => esperarPor())
  .then(esperarPor)

