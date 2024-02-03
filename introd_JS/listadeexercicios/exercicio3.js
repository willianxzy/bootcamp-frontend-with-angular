/* EXERCICIO 3

3) Elabore um algoritmo que calcule oque deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento:

- Á vista no débito, recebe 10% de desconto;
- Á vista no dinheiro ou pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta + juros de 10%; */

const precoEtiqueta = 120.5;
const formaPagamento = 1; //Para alterar as opções de forma de pagamento deve-se alterar o valor dessa variável. 

if (formaPagamento === 1) {
    console.log('Desconto de 10% liberado. O preço do produto será de:', (precoEtiqueta / 100 * 90).toFixed(2));
} else if (formaPagamento === 2) {
    console.log('Desconto de 15% liberado. O preço do produto será de:', (precoEtiqueta / 100 * 85).toFixed(2));
} else if (formaPagamento === 3) {
    console.log('Desconto não liberado. O preço do produto será de:', precoEtiqueta.toFixed(2));
} else {
    console.log('Juros de 10%. O preço do produto será de:', (precoEtiqueta / 100 * 110).toFixed(2));
}