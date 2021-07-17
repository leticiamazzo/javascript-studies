// TRANSFORMA CADA UM DOS ELEMENTOS
// map() = tranforma cada elemento do array e o resultante sempre terá o mesmo tamanho do original, mas em um novo array (sem modificar o original)
// map() recebe outra função como parâmentro = assim como higher order function, map() recebe outra função como parâmetro
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

const double = numbers.map(function (number) {
    return number * 2
})
console.log(double); 

// OU

const double1 = numbers.map(number => number * 2) 
console.log(double1);


// ----


const allScores = students.map(students => students.score)
allScores.map(Math.ceil)

console.log(allScores);

// OU

const getScore = el => el.score
const result = students.map(getScore).map(Math.floor)
console.log(result);

const allTheScores = students.map(student => student.score).map(Math.ceil)
console.log(allTheScores);


// ----


const idades = data.map(data => data.age * 2)
console.log(idades);

const doble = numbers.map(number => number * 2)
console.log(doble);

const moreOnePoint = students.map(student => student.score ++).map(Math.ceil)
console.log(moreOnePoint);

const humanAge = data.map(animal => animal.age + 5)
console.log(humanAge);

const totalShopping = shoppingList.map(shoppingItem => shoppingItem.price * 2)
console.log(totalShopping);

const nums = [1, 2, 3, 4, 5]
const dobro = (n, i, arr) => n * 2 + i + arr.length
console.log(nums.map(dobro));


const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 500.50 },
  { nome: 'Caderno', qtde: 4, preco: 27.10 },
  { nome: 'Lápis', qtde: 3, preco: 5.99 },
  { nome: 'Tesoura', qtde: 1, preco: 11.25 },
]

const itensCompra = carrinho.map(item => item.nome)
console.log(itensCompra);

const valorCompra = carrinho.map(item => item.qtde * item.preco)
console.log(valorCompra);

const muitosItens = carrinho.map(item => item.preco * 10)
console.log(muitosItens);


// fazendo map na mão para entender o que faz
// poderia ser meuMAp(arr, fn), mas não precisa já que exite o array.prototype
// se fosse arrow function não conseguiria acessar o array com this
// função recebe elemento atual, indice atual e o array completo
Array.prototype.meuMap = function(fn) {
  const novoArray = []
  
  for (let i = 0; i < this.length; i++) {
    const resultado = fn(this[i], i, this)
    novoArray.push(resultado)
  }

  return novoArray
}

const getNome = item => item.nome
console.log(carrinho.meuMap(getNome));