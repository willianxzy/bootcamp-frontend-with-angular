// Assim como nos Arrays, conseguimos tipar as nossas funções

function addNumber(x: number, y: number): number {
	return x + y;
}

let soma: number = addNumber(4,7);

// Declaramos a tipagem para nosso x ser number, nosso y ser number e o resultado dessa função também ser do tipo number.

// Funções em multi types
// Podemos ter funções com Multi Types, e que ela retorne a variável que lhe foi proposta.

function CallToPhone(phone: number | string): number | string {
	return phone;
};

console.log(CallToPhone(27997356785));

// Funções Async (async = assíncronas)
// Toda vez que temos um async significa que a função é assíncrona, ou seja, quando utilizamos o async estamos fazendo uma promise, e toda vez temos que declarar essa promise.

async function getDataBase(id: number): Promise<string>  {
	return 'felipe';
}
