// ## *Interfaces e Comparação com o Type*
// *( type x interface )*
// Type utilizamos para tipar um conjunto, tipar um objeto.
// Interface utilizamos mais quando vamos trabalhar com classes.
// Porém a maioria das pessoas utilizam o interface, o interface é como um contrato, quem adquirir os parâmetros declarados no interface vai seguir aquele contrato ali fielmente.

type robot = {
	id: number;
	name: string;
};

interface robot2 {
	id: number;
	name: string;
};

const bot: robot = {
	id: 18,
	name: 'MegaBot',
};

// Podemos utilizar o “readonly” para definir que aquele parâmetro seja somente de leitura, ou seja, o mundo externo não pode modificar aquele parâmetro estabelecido.

type robotEx2 = {
    readonly id: number;
    name: string;
};

interface robot2Ex2 {
    readonly id: number;
    name: string;
};

const bot1: robot = {
    id: 1,
    name: 'MegaBot1',
};

const bot2: robot2 = {
    id: 2,
    name: 'MegaBot2',
};

(bot1.name = 'MegaBot007')
console.log(bot1);
console.log(bot2);

// portanto se tentamos manipular o name irá funcionar pois não utilizamos o readonly nele, porém, se for utilizar no id irá apresentar erro pois não podemos alterar em modo de somente leitura (readonly)