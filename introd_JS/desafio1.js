/* DESAFIO

Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1- Preço do Combustível;
2- Gasto Médio de combustível do carro por KM;
3- Distância em KM da viagem;
Imprima no console o valor que será gasto para realizar essa viagem.
*/

let precComb = 5.94;
let gastComb = 28;
const distKm = 250;

const gastoGas = distKm / gastComb * precComb;
console.log('R$', gastoGas.toFixed(2));