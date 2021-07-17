// reduce() - GERA UM RESULTADO MUTO DIFERENTE DO [] ORIGINAL
// Exemplo: ao somar os itens do array, o resultado é um number. Poderia retornar um objeto também com esse number como atributo dentro.  
// Exemplo: somar todos os indices do array e chegar em um valor inteiro
// fn(total, el) => total + el 
// total - como 1 acumulador
// el - elemento atual
// além do total e elemento, também consegue receber indice e array

// Iterar um Array
// frutas.forEach(function (item, indice, array) {
//   console.log(item, indice);
// });
// Maçã 0
// Banana 1

const numbers = [1, 2, 3, 4, 5, 6]

const students = [
  { name: 'Jake', score: 6.4 },
  { name: 'Susan', score: 8.1 },
  { name: 'Emma', score: 9.5 },
  { name: 'Peter', score: 5.6 },
]

data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  }
];

const sum1 = numbers.reduce((total1, el1) => total1 + el1)
console.log(sum1); // aqui não consigo mudar o valor total


// OU


const somando = numbers.reduce((total4, el4) => (total4 + el4)) //resolve em uma linha
console.log(somando);


// OU

// const sum2 = (total2, el2) => total2 + el2 //trecho reaproveitável
// const total2 = numbers.reduce(sum2, 100) // aqui consigo mudar o valor total (aqui, sum2 é a função / acumuldor e 100 é i, ou seja, o elemnto / dado inicial. Se o valor inicial fosse 0, isso não influenciaria na soma)
// console.log(total2);



// quero retornar a soma de todas as idades dos animais
const sumAnimalsAge = data.reduce((total, el) => (total + el.age))
console.log(sumAnimalsAge);



// calcular media entre os numbers
  // minha solução que deu certo!!!!! o//
    const base = (total, el) => total + el
    const sumItens = numbers.reduce(base) / numbers.length
    console.log(sumItens);

  // solução da aula
  const avg = (acumulador, elemento, indice, arr) => {
    if (indice === arr.length - 1) {
      return (acumulador + elemento) / arr.length
    } else {
      return acumulador + elemento
    }
  }

  const mediaResult = numbers.reduce(avg)
  console.log(mediaResult);

shoppingList = [
  {
    name: 'Bananas',
    price: 8.00,
  },
  {
    name: 'Laranjas',
    price: 5.00,
  },
  {
    name: 'Morangos',
    price: 3.50,
  },
];

const totalShop = shoppingList.reduce((total, el) => total + el)
console.log(totalShop.toString());

const sum2 = (total2, el2) => total2 + el2 //trecho reaproveitável
const total2 = numbers.reduce(sum2, 0) // aqui consigo mudar o valor total (aqui, sum2 é a função / acumuldor e 0 é i, ou seja, o elemnto / dado inicial. Assim, o valor não influencia na soma). Aqui vai rolar 0 + 1 = 1; 1 + 2 = 3; 3 + 3 = 6; 6 + 4 = 10; 10 + 5 = 15, 15 + 6 = 21. Se o valor inicial não é passado, usa o primeiro item do array
console.log(total2);

