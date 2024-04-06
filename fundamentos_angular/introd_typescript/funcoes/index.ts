// Assim como nos Arrays, conseguimos tipar as nossas funções

function addNumber(x: number, y: number): number {
	return x + y;
}

let soma: number = addNumber(4,7);

// Declaramos a tipagem para nosso x ser number, nosso y ser number e o resultado dessa função também ser do tipo number.