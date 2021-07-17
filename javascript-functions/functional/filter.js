// FILTRA OS ELEMENTOS
// filter() - gera array de tamanho igual, menor ou vazio
// passa função por parâmetro com objetivo de filtrar. A resposta dela é sempre true ou false, independente se o retorno não for booleno. Os itens que entram no array resultante tem resposta true.
// fornece um critério e o filter vai fazer um for() interno percorrendo cada um dos elementos
// pode receber também o indice e o array
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

// const greaterThanZero = number => number > 1
// const greaterThanTen = number => number > 10
// const even = number => number % 2 === 0
// const betterScores = student => student.score >= 9
// const teste = number => number <= 8

// console.log(numbers.filter(greaterThanZero));
// console.log(numbers.filter(greaterThanTen));
// console.log(numbers.filter(even));
// console.log(students.filter(betterScores));
// console.log(numbers.filter(teste));

const ages = [32, 33, 16, 40];
const younger = age => age <= 18
console.log(ages.filter(younger));

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
  },
];
  
const cat = data.filter((animal) => animal.type === 'cat')
console.log(cat);

const divisibleByThree = numbers.filter(number => number % 3 === 0)
console.log(divisibleByThree);

const betterNotes = students.filter(student => student.score > 9)
console.log(betterNotes);

const allDogs = data.filter(animal => animal.type === "dog")
console.log(allDogs);

const shopping = shoppingList.filter(sh => sh.price <= 5.00)
console.log(shopping);

const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 500.00 },
  { nome: 'Caderno', qtde: 4, preco: 27.10 },
  { nome: 'Lápis', qtde: 3, preco: 5.99 },
  { nome: 'Tesoura', qtde: 1, preco: 11.25 },
]

const produtosMaisBaratos = item => item.preco <= 7.00
console.log(carrinho.filter(produtosMaisBaratos));

const produtosMaisCaros = carrinho
  .filter(item => item.preco >= 10.00)
  .map(item => item.preco * 10 / 100)

console.log(produtosMaisCaros);


const produtosQueQuero = item => item.nome
const produtinhos = item => item.preco <= 20.00
console.log(carrinho.filter(produtinhos).map(produtosQueQuero));


// fazendo filter na mão para entender o que faz
Array.prototype.meuFilter = function(fn) {
  const novoArray = []

  // this é o array
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      novoArray.push(this[i])
    }
  }
  return novoArray
}

const qtdeMaiorQueZero = item => item.qtde > 0
const nomeItensValidos = carrinho.
  meuFilter(qtdeMaiorQueZero)
  console.log(nomeItensValidos);


