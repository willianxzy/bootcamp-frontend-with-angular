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

