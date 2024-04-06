// object 

let produto: object = {
	name: 'Willian',
	idade: 19,
	cidade: 'Domingos Martins',
};

// quando declaramos uma variável de object podemos receber qualquer tipo de objeto, porém quando fazemos isso estamos passando um objeto sem previsibilidade.


// criando um object tipado com previsibilidade

// primeiro devemos criar um type para declarar quais os conteúdos do nosso object tipado
type produtoLoja = {
	nome: string;
	valor: number;
	unidades: number;
};

let meuProduto: produtoLoja = {
    nome: 'Tênis',
	valor: 149.99,
	unidades: 10,
};

// Ou seja, criamos um object no qual seus itens foram tipados pelo type produtoLoja, e o nosso objeto meuProduto segue os parâmetros desse type.