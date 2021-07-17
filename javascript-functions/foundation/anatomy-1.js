// Function declaration

function sayHello() {
    console.log('Hello!');
}
 
// function sayHelloTo(name) {
//     console.log('Hello ' + name + '!');
// }

function sayHelloTo(name) {
    // template string
    console.log(`Hello ${name}!`);
}

function returnHi() {
    // para esse valor aparecer precisaria executar função em uma variável. Ex: let greeting = returnHi(); 
    // ou executar função direto em um console.log(). Ex: console.log(returnHi());
    return 'Hi';
}

function returnHiTo(name) {
    return `Hi, ${name}!`
}


sayHello();
sayHelloTo('Letícia');

returnHi(); // não traz nada. precisa de uma das seguintes formas para retornar
const greeting = returnHi();
console.log(greeting);
console.log(returnHi());

const greetingPerson = returnHiTo('Letícia');
console.log(greetingPerson);
console.log(returnHiTo('Letícia'));