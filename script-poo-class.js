// Orientação para rodar
// 1 - abre o terminal do vscode
// 2 - roda o comando node nome-do-arquivo.js


// Conceitos de Programação Orientada a Objetos (POO)

// função - porque até o ES6, JS não tinha classe
// const Livro = {
//     nome: "React Native",
//     editora: "Cada do código",
//     paginas: 185,
//     anunciar: function() {
//         console.log("O nome do livro é " + this.nome);
//     }
// }

// Livro.anunciar()

// Se quiser criar um novo livro, não consegue a partir dessa estrutura (não dá para passar parâmetros e mudar o conteúdo usando a mesma base).



// Outra forma usando funções:
// const Livro = function (nome, editora, paginas) {
//     gNome = nome,
//     gEditora = editora,
//     gPaginas = paginas

//     this.getNome = function() {
//         return gNome
//     }

//     this.getEditora = function() {
//         return gEditora
//     }

//     this.getPaginas = function() {
//         return gPaginas
//     }
// }

// const GraphQL = new Livro("GraphQL", "Casa do código", 143)
// console.log(GraphQL.getNome());
// console.log(GraphQL.getEditora());
// console.log(GraphQL.getPaginas());

// obejtos tem propriedade prototype do JS que define várias coisas




// Classe = Estrutura com característica e funcionalidades para criar objetos.
// São funções, mas tem diferenças de funcionalidades:
// - classes não são hoisted (içadas), ou seja, não consegue primeiro chamar uma classe e depois declarar como funções. Precisa declarar e, só depois, chamar

class Livro {
    constructor(nome, editora, paginas) {
        this.nome = nome,
        this.editora = editora,
        this.paginas = paginas
    }
    
    anunciarTitulo() {
        console.log(`Título: ${this.nome}`);
    }

    descreverTitulo() {
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`);
    }
}

// Instanciar classe = criar um objeto a partir de uma classe. Vai ser um exemplar
const NodeJS = new Livro("Primeiros passos com NodeJS", "Casa do Código", 195)
NodeJS.anunciarTitulo()
NodeJS.descreverTitulo()


// Herança = dar propriedades de um para outro, por exemplo, já tenho Livro mas quero criar uma outra classe que herde essas propriedades 
// Objetivo = LivroColecao herdar propriedades da classe Livro
class LivroColecao extends Livro {
    constructor(nome, nomeColecao) {
        // super = palavra chave para disponibilizar propriedades de Livro no constructor dessa nova classe LivroColecao. super(nome) significa que só quer pegar a propriedade nome da classe Livro. Editora e paginas não serão herdadas
        super(nome)
        this.nomeColecao = nomeColecao
    }

    descreverColecao() {
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`);
    }
}

const reactNative = new LivroColecao("React Native", "Tudo sobre React")
reactNative.descreverColecao()



