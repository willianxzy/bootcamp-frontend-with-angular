function escrevaSeuNome(name) { 
    console.log('Seu nome é: ' + name);
}

escrevaSeuNome('Willian');
//Para declarar uma função, semanticamente falando é melhor utilizar um verbo para sua declaração, fazer, escrever, nomear, etc...

// -----------------------------------------------------------------------------------------------------------------------------------------------//

function verificarIdade(years) {
    if (years >= 18) {
        console.log('Sua idade é: ' + (years) + '.' + (' Você é maior de Idade.'));
    } else {
        console.log('Sua idade é: ' + (years) + '.' + (' Você é menor de Idade.'));
    }
}
verificarIdade('18');

// -----------------------------------------------------------------------------------------------------------------------------------------------//

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

function main() {
    const precoEtiqueta = 100;
    const formaPagamento = 4;

if (formaPagamento === 1) {
    console.log('Desconto de 10% liberado. O preço do produto será de:', aplicarDesconto(precoEtiqueta, 10));
} else if (formaPagamento === 2) {
    console.log('Desconto de 15% liberado. O preço do produto será de:', aplicarDesconto(precoEtiqueta, 15));
} else if (formaPagamento === 3) {
    console.log('Desconto não liberado. O preço do produto será de:', (precoEtiqueta));
} else {
    console.log('Juros de 10%. O preço do produto será de:', aplicarJuros(precoEtiqueta, 10));
}
}
main();