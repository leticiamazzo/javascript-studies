// Anonymous function
// IIFE - Immediately Invoked Function Expression
// Como ela não tem nome, não tem como invocar e colocar parâmentros. Por isso, coloca os parâmetros entre () assim que ela termina

(function(a, b) {
    let x = 65
    console.log(`Result: ${a + b}`);
    console.log(x);
})(1, 2);

((a, b) => console.log(`Result ${a + b}`))(5, 9);

(() => {
    console.log('arrow #01')
})();

(() => console.log('arrow #02'))();
