const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lápis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]

// 1 - pega só os frágeis
const isFragil = el => el.fragil === true
const fragilItems = carrinho.filter(isFragil)
console.log(fragilItems);

// 2 - qtde * preco = total
const valuePerItem = fragilItems => fragilItems.preco * fragilItems.qtde
const getTotalPerItem = fragilItems.map(valuePerItem)
console.log(getTotalPerItem);

// 3 - media dos totais
const total = (el, total) => (el + total)
const getTotal = getTotalPerItem.reduce(total, 0)
console.log(getTotal);
const getMedia = getTotal / getTotalPerItem.length
console.log(getMedia);

// soma os indices / getTotalPerItem.length