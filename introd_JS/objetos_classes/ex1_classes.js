class pessoa {
    nome;
    idade;
//criamos o constructor para que sempre que uma pessoa seja instânciada, siga esses parametros descritos no constructor, ou seja, sempre que uma pessoa for instânciada o constructor irá pedir seu nome e sua idade. 
    constructor(nome, idade) {
        this.nome= nome;
        this.idade= idade;
        this.anoDeNascimento= 2024 - idade;
    }

    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

//portanto o exemplo acima é a definição de pessoa.
//na sintaxe de classe não precisamos colocar como function, somente colocar o nome da função 

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//INSTANCIA CRIADA COM NOME DE WILLIAN

const willian = {
    nome: 'Willian Kuhn Littig',
    idade: 19, 

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};
willian.descrever(); //invocamos a instância da seguinte maneira para exibir ela no terminal.

//No exemplo acima eu fiz uma instância de willian.

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//EXEBIÇÃO DA NOSSA INSTÂNCIA PEDRO SEGUINDO OS PARAMETROS DESCRITOS NA CLASSE PESSOA.

//Para conseguirmos instanciar nossa classe sem precisar criar uma instância devemos realizar o seguinte código:

const pedro = new pessoa('pedro', 20);
console.log(pedro);

//Desta forma conseguimos criar uma nova instância chamada pedro, definir seu nome e sua idade e o terminal imprimir para nós o resultado.

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//FUNÇÕES RECEBENDO OBJETOS
//VAMOS CRIAR UMA FUNÇÃO PELA QUAL ELA VAI COMPARAR AS PESSOAS CRIADAS

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velha(o) que ${p2.nome}`);
    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velha(o) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`); 
    }
};

const joao= new pessoa('João Souza', 20);
const gustavo= new pessoa('Gustavo Zé pagão', 20);
compararPessoas(joao, gustavo);