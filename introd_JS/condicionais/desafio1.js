/* DESAFIO

Faça um programa para calcular o valor de uma viagem.
Você terá 5 variáveis. Sendo elas:
1- Preço do Etanol;
2- Preço da Gasolina;
3- O tipo de combustível que está no seu carro;
4- Gasto Médio de combustível do carro por KM;
5- Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar essa viagem.*/

const precoEtanol = 4.15;
const precoGasolina = 5.94;
const mediaCarro = 12; 
const tipoCombustivel = 'gasolina';
const distKm = 250;

const gasolina = distKm / mediaCarro * precoGasolina; 
const etanol = distKm / mediaCarro * precoEtanol;

if (tipoCombustivel === 'gasolina') {
    console.log('Gasto da viagem utilizando gasolina será: R$',gasolina.toFixed(2));
} else {
    console.log('Gasto da viagem utilizando etanol será: R$',etanol.toFixed(2));
} 
