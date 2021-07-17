const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lápis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

//   objetivo
// calcular o valor total de cada item, multiplicando sua quantidade pelo preço
// calcular o valor total do carrinho, somando o valor total de cada item

// const multiply = (a, b) => a * b
// const porItem = carrinho.map(multiply)
// console.log(porItem);

const totalPerItem = item => item.qtde * item.preco
const sum = (a, b) => a + b

const getTotal = carrinho
    .map(totalPerItem)
    .reduce(sum, 0)
console.log(getTotal)



// map porque precisa tranformar cada elemento do array
// const getGeneralTotal = carrinho
// .map(getTotalItem)
// .reduce(sumShopItens, 0)

// console.log(getGeneralTotal);