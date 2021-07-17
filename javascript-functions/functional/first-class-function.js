// first class function / citizen (cidadão de alta importância dentro do JS) = quando variável suporta receber uma função 

const add = function(a, b) {
    return a + b;
}
console.log(add(1, 2));

const subtract = (a, b) => a - b;
console.log(subtract(20, 5));
