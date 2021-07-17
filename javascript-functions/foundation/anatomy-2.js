// Anonymous function = função que não tem nome
(function (a, b) {
    return a + b;
})

// Function expression = atribui valor de uma função a uma variável
const sum = function(a, b) {
    return a + b;
}

const result = sum(2, 3)
console.log(result);

const anotherSum = sum(2, 2);
console.log(anotherSum);

const sum2 = (a, b) => console.log(a+b);
const sum3 = (a, b) => a + b;

sum2(1, 5);
sum2(2, 6);
