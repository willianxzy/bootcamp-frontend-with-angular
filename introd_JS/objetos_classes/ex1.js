//ESTRUTURA BASE DE UM OBJETO


//Conseguimos criar um objeto incremental utilizando as mesmas propriedades de se criar uma variável.
const willian = {
    nome: 'Willian K Littig' ,
    idade: 19
};
//Para imprimir esse objeto criamos um console.log e o nome que demos a ele ou podemos imprimir simplismente apenas alguma das informações contidas nele.

//Para emitir somente uma das informações declaradas nele vamos solicitar assim para o terminal:
console.log(willian.idade);
//Assim vai exibir no terminal o valor declarado na idade.
console.log(willian.nome);
//Assim vamos conseguir emitir o nome
console.log(willian);
//E assim vamos emitir o objeto incremental todo.

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//EDITANDO INFORMAÇÕES DE UM OBJETO


//Conseguimos alterar as informações contidas em nosso objeto, pois o mesmo é dinâmico.
willian.altura = 1.73
console.log(willian.altura);

//Desta maneira emitimos o valor que alteramos no objeto e pedimos para o terminal exibir para nós.
//Da mesma maneira que conseguimos adicionar valores ao nosso objeto, também conseguimos tirar.

delete willian.nome

console.log(willian.nome)

//O terminal nos emitiu que existe um valor indefinido, isso ocorreu pois eu deletei o valor nome do objeto Willian e pedi pra ele imprimir pra mim esse mesmo valor, mas deu como indefinido pois foi deletado.


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//CRIANDO MÉTODOS PARA O OBJETO


const usuário = {
    nome: 'Willian K Littig' ,
    idade: 19, 

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); //o termo this utiliza para substituir o nome do objeto criado, ao invés de colocarmos usuário.nome, colocamos this.nome, que no final é a mesma coisa.
    }
};

usuário.descrever(); 

//Desta maneira conseguimos adicionar um método(função) dentro do nosso objeto incremental, e logo após invocar essa função.

//Conseguimos também da mesma maneira alterar os valores da função, funciona da seguinte forma

usuário.descrever = function() {
    console.log(`Meu nome é ${this.nome}`);
}

usuário.descrever();

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//ACESSANDO DINAMICAMENTE VALORES DE UM OBJETO

//Para acessarmos os valores de forma mais dinâmica iremos utilizar um atributo e através de uma string, colher os valores com esse atributo.

//Utilizando os valores do nosso primeiro objeto const willian lá em cima, vamos colher os seus valores e emitirmos no terminal.

console.log(willian['idade']);

//Nesse caso eu não busquei o valor NOME, pois lembra que mais acima nós deletamos ele?! pois então, no terminal iria aparecer como valor undefined.

//conseguimos alterar os valores do objeto de forma dinâmica também, vamos ver:

willian['nome'] = 'teste';
willian.nome = 'teste';

//Os dois modos são a mesma coisa, porém o de cima é dinâmico e o de baixo de modo direto.