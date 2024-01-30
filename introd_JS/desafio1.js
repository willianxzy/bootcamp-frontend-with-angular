/* DESAFIO

Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1- Preço do Combustível;
2- Gasto Médio de combustível do carro por KM;
3- Distância em KM da viagem;
Imprima no console o valor que será gasto para realizar essa viagem.
*/

let precomb = 5.94;
let gastcomb = 28;
const distkm = 250;

const resultado = distkm / gastcomb * precomb;
console.log('R$', resultado);